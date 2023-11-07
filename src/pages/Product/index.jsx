import React, { useEffect, useState } from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchContent } from '../../redux/slice/contentSlice'
import menuLoadingImg from '../../assets/images/menuloadingimg.png'
import { CiLocationOn } from 'react-icons/ci'
import selectIcon from '../../assets/images/select-icon.svg'

const Product = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])



  const handleClick = (e) => {
    const element = e.currentTarget;
    const circle = element.querySelector('.md-click-circle');
    circle.classList.remove('md-click-animate');
    if (!circle.clientHeight && !circle.clientWidth) {
      const d = Math.max(element.offsetWidth, element.offsetHeight);
      circle.style.height = d + 'px';
      circle.style.width = d + 'px';
    }
    const x = e.pageX - element.getBoundingClientRect().left - circle.offsetWidth / 2;
    const y = e.pageY - element.getBoundingClientRect().top - circle.offsetHeight / 2;
    circle.style.top = y + 'px';
    circle.style.left = x + 'px';
    circle.classList.add('md-click-animate');
  };



  const contents = useSelector(state => state.content.contents)
  const isLoading = useSelector(state => state.content.isLoading)
  const { cat } = useParams();
  const { product } = useParams();
  const [size, setSize] = useState('Grande');

  return (
    isLoading ? <div className='menuLoading'>
      <img src={menuLoadingImg} />
    </div> : <>
      <div className='product-speedbar'>
        <div className='menu-container'>
          <Link to='/menu'>Menu</Link> / <Link to={`/menu/${cat}`}>{cat}</Link> / <span>{product}</span>
        </div>
      </div>
      <div className='product-background'>
        <div className='menu-container'>
          {
            contents.filter(item => (item.subcategory === cat) && (item.name === product)).map(item => {
              return (
                <div className='product-inner-item' key={item.id}>
                  <div className='product-inner-item-img'>
                    <img src={item.img} />
                  </div>
                  <div className='product-inner-item-info'>
                    <div className='product-inner-item-title'>
                      {item.name}
                    </div>
                    <div className='product-inner-item-calorie'>
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
      <div className='menu-container'>
        <div className='product-inner-item-content'>
          <div className='product-inner-item-left-side'>
            <h3>Size options</h3>
            <div className='product-sizes'>
              {
                contents.filter(item => (item.subcategory === cat) && (item.name === product)).map((item, i) => item.sizes.map((item, j) => {
                  const uniqueKey = i - j;
                  return (
                    <div key={uniqueKey} onClick={() => setSize(item.size)} className='product-size'>
                      <div className='product-size-img'>
                        {
                          <img src={size !== item.size ? item.url : item.surl} />
                        }
                      </div>
                      <div className='product-size-name'>
                        {item.size}
                      </div>
                      <div className='product-size-capacity'>
                        {item.capacity}
                      </div>
                    </div>
                  )
                }))
              }
            </div>
            <div className='product-location'>
              <div className='product-location-icon'>
                <CiLocationOn />
              </div>
              <div>Select a store to view availability</div>
            </div>
          </div>
          <div className='product-inner-item-right-side'>
            <h3>What's included</h3>
            <div className="select-list">
              <div className='circle-animation'>
                <div className='material-click material-on-me' onClick={handleClick}>
                  <div className='animated-input'>
                    <span>Milk</span>
                    <div className='select-icon'>
                      <img src={selectIcon} alt="" />
                    </div>
                    <select name="" id="">
                      <option value="">Heavy Cream</option>
                      <option value="">Vanilla Sweet Cream</option>
                      <option value="">Nonfat Milk</option>
                      <option value="">2% Milk</option>
                      <option value="">Whole Milk</option>
                      <option value="">Breve (Half & Half)</option>
                      <option value="">Almond</option>
                      <option value="">Coconut</option>
                      <option value="">Oatmilk</option>
                      <option value="">Soy</option>
                    </select>
                  </div>
                  <span className='md-click-circle'></span>
                </div>
              </div>
              <div className='circle-animation'>
                <div className='material-click material-on-me' onClick={handleClick}>
                  <div className='animated-input'>
                    <span>Milk</span>
                    <div className='select-icon'>
                      <img src={selectIcon} alt="" />
                    </div>
                    <select name="" id="">
                      <option value="">Extra Ice</option>
                      <option value="">Light Ice</option>
                      <option value="">No Ice</option>
                      <option value="">Ice</option>
                    </select>
                  </div>
                  <span className='md-click-circle'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product