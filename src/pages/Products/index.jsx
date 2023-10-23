import React, { useEffect } from 'react'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchContent } from '../../redux/slice/contentSlice'
import MenuCategories from '../../components/MenuCategories'
import menuLoadingImg from '../../assets/images/menuloadingimg.png'

const Products = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContent())
    }, [dispatch])

    const contents = useSelector(state => state.content.contents)
    const isLoading = useSelector(state => state.content.isLoading)
    const error = useSelector(state => state.content.error)
    const { cat } = useParams();

    return (
        <div className='menu-container'>
            <div className="menu-content">
                    <MenuCategories />
                    {
                        isLoading ? <div className='menuLoading'>
                        <img src={menuLoadingImg} />
                      </div> : <div className="menu-products">
                        <div className="speedbar">
                            <Link to='/menu'>Menu</Link> / <span>{cat}</span>
                        </div>
                        <h4>{cat}</h4>
                      <div className="products">
                        {
                            contents.filter(item => item.subcategory === cat).map(item => {
                                return (
                                    <div className='product-item' key={item.id}>
                                        <Link to={`/menu/${cat}/${item.name}`}>
                                            <div className="product-item-img">
                                                <img src={item.img} />
                                            </div>
                                            <div className="product-item-title">
                                                {item.name}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                      </div>
                    }
                </div>

        </div>
    )
}

export default Products