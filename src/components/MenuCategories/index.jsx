import React, { useEffect } from 'react'
import './MenuCategories.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from '../../redux/slice/contentSlice'
import { Link } from 'react-router-dom'
const MenuCategories = () => {
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  const contents = useSelector(state => state.content.contents)
  const isLoading = useSelector(state => state.content.isLoading)
  const uniqueSubcategories = [...new Set(contents.map(item => item.subcategory))];
  return (
    isLoading ? '' : <div className="menu-categories">
          <h3>Drinks</h3>
          <ul>
            {
              uniqueSubcategories.map((item, i) => {
                return <li key={i}><Link to={`/menu/${item}`}>{item}</Link></li>
              })
            }
          </ul>
        </div>
  )
}

export default MenuCategories