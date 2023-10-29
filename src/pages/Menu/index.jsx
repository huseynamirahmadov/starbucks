import React from 'react'
import './Menu.css'
import MenuCategories from '../../components/MenuCategories'
import MenuProducts from '../../components/MenuProducts'

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-content'>
        <MenuCategories />
        <MenuProducts />
      </div>
    </div>
  )
}

export default Menu