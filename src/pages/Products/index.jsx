import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchContent } from '../../redux/slice/contentSlice'

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
        <>
            <div className="menu-products">
                <h2>Menu</h2>
                <h3>Drinks</h3>
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

        </>
    )
}

export default Products