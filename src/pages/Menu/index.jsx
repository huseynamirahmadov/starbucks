import React, { useEffect } from 'react'
import './Menu.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from '../../redux/slice/contentSlice'
import { Link } from 'react-router-dom'

const Menu = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  const contents = useSelector((state) => state.content.contents)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)
  const uniqueSubcategories = [...new Set(contents.map(item => item.subcategory))];
  const firstItems = uniqueSubcategories.map(subcategory => contents.find(item => item.subcategory === subcategory));

  return (
    <div className="menu-container">
      <div className="menu-content">
        <div className="menu-categories">
          <h3>Drinks</h3>
          <ul>
            {
              uniqueSubcategories.map(item => {
                return <li><Link to={`/menu/${item}`}>{item}</Link></li>
              })
            }
          </ul>
        </div>
        <div className="menu-products">
          <h2>Menu</h2>
          <h3>Drinks</h3>
          <div className="products">
            {firstItems.map((item, index) => (
              <div className='product-item' key={item.id}>
                <Link to={`/menu/${item.subcategory}`}>
                  <div className="product-item-img">
                    <img src={item.img} />
                  </div>
                  <div className="product-item-title">
                    {item.subcategory}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu