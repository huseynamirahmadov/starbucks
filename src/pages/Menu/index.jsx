import React, { useEffect } from 'react'
import './Menu.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from '../../redux/slice/contentSlice'

const Menu = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  const contents = useSelector((state) => state.content.contents)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)
  const subcategory = [...new Set(contents.map(item => item.subcategory))]
  console.log(subcategory)

  return (
    <div className="menu-container">
      <div className="menu-content">
        <div className="menu-categories">
          <h3>Drinks</h3>
          <ul>
            {
              subcategory.map(item => {
                return <li><a href={`/menu/${item}`}>{item}</a></li>
              })
            }
          </ul>
        </div>
        <div className="menu-products">
          <h2>Menu</h2>
          <h3>Drinks</h3>
          <div className="products">
            <div className='product-item'>
              <div className="product-item-img">
                <img src='https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630' />
              </div>
              <div className="product-item-title">
                Oleato
              </div>
            </div>
            <div className='product-item'>
              <div className="product-item-img">
                <img src='https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630' />
              </div>
              <div className="product-item-title">
                Oleato
              </div>
            </div>
            <div className='product-item'>
              <div className="product-item-img">
                <img src='https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630' />
              </div>
              <div className="product-item-title">
                Oleato
              </div>
            </div>
            <div className='product-item'>
              <div className="product-item-img">
                <img src='https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630' />
              </div>
              <div className="product-item-title">
                Oleato
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu