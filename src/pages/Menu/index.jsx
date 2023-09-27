import React, { useEffect } from 'react'
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
  return (
    <>
      {
       isLoading ? <div>Loading..</div> : contents.map(item => {
        return <div key={item.id}>{item.name}</div>
      })
      }
    </>
  )
}

export default Menu