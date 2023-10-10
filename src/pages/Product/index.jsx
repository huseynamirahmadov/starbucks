import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchContent } from '../../redux/slice/contentSlice'

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

  return (
    <div className='products'>
      {
        contents.filter(item => (item.subcategory === cat) && (item.name === product)).map(item => {
          return (
            <div className='product-item' key={item.id}>
                <div className="product-item-img">
                  <img src={item.img} />
                </div>
                <div className="product-item-title">
                  {item.name}
                </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Product