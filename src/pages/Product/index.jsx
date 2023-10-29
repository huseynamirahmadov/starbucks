import React, { useEffect, useState } from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchContent } from '../../redux/slice/contentSlice'
import menuLoadingImg from '../../assets/images/menuloadingimg.png'
const Product = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  const contents = useSelector(state => state.content.contents)
  const isLoading = useSelector(state => state.content.isLoading)
  const error = useSelector(state => state.content.error)
  const uniqueSubcategories = [...new Set(contents.map(item => item.subcategory))];
  const firstItems = uniqueSubcategories.map(subcategory => contents.find(item => item.subcategory === subcategory));
  const { cat } = useParams();
  const { product } = useParams();
  const [size, setSize] = useState('Grande');
  
  return (
    isLoading ? <div className='menuLoading'>
      <img src={menuLoadingImg} />
    </div> : <>
      <div className="product-speedbar">
        <div className="menu-container">
          <Link to='/menu'>Menu</Link> / <Link to={`/menu/${cat}`}>{cat}</Link> / <span>{product}</span>
        </div>
      </div>
      <div className="product-background">
        <div className="menu-container">
          {
            contents.filter(item => (item.subcategory === cat) && (item.name === product)).map(item => {
              return (
                <div className='product-inner-item' key={item.id}>
                  <div className="product-inner-item-img">
                    <img src={item.img} />
                  </div>
                  <div className="product-inner-item-info">
                    <div className="product-inner-item-title">
                      {item.name}
                    </div>
                    <div className="product-inner-item-calorie">
                      {
                        item.sizes.filter(item => item.size === size).map(item => item.calories)
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="menu-container">
        <div className="product-inner-item-content">
          <div className="product-inner-item-left-side">
            <h3>Size options</h3>
            <div className="product-sizes">
              {
                contents.filter(item => (item.subcategory === cat) && (item.name === product)).map(item => item.sizes.map(item => {
                  return (
                    <div onClick={() => setSize(item.size)} className="product-size">
                      <div className="product-size-img">
                        {
                          <img src={size !== item.size ? item.url : item.surl} />
                        }
                      </div>
                      <div className="product-size-name">
                        {item.size}
                      </div>
                      <div className="product-size-capacity">
                        {item.capacity}
                      </div>
                    </div>
                  )
                }))
              }
            </div>
          </div>
          <div className="product-inner-item-right-side">
            <h3>What's included</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product