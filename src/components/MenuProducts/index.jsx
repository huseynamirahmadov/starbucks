import React, { useEffect } from 'react'
import './MenuProducts.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from '../../redux/slice/contentSlice'
import menuLoadingImg from '../../assets/images/menuloadingimg.png'
import { Link } from 'react-router-dom'
const MenuProducts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  const contents = useSelector(state => state.content.contents)
  const isLoading = useSelector(state => state.content.isLoading)
  const uniqueSubcategories = [...new Set(contents.map(item => item.subcategory))];
  const firstItems = uniqueSubcategories.map(subcategory => contents.find(item => item.subcategory === subcategory));
  return (
    isLoading ? <div className='menuLoading'>
      <img src={menuLoadingImg} />
    </div> : <div className='menu-products'>
      <h2>Menu</h2>
      <h3>Drinks</h3>
      <div className='products'>
        {firstItems.map(item => (
          <div className='product-item' key={item.id}>
            <Link to={`/menu/${item.subcategory}`}>
              <div className='product-item-img'>
                <img src={item.img} />
              </div>
              <div className='product-item-title'>
                {item.subcategory}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuProducts