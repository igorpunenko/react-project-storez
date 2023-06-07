import React from 'react'
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className='main'>

        <div className="banner">
            <div className="banner-text">
            <h1>Путешествие начинается с идеальной пары кроссовок</h1>
           
            <Link to="/products"> <button className='shop-btn'>КУПИТЬ СЕЙЧАС</button></Link>
            </div>
         
        </div>
        <div className="preview">

            <h2 className='txt'>ПОСМОТРИТЕ НА  &nbsp; <span> НАШИ </span>  &nbsp; НОВИНКИ</h2>

            <div className="preview-cards">
               
                <div className="sample"><img className='preview-img' src="https://snaxstore.netlify.app/static/media/shirt.a98f49e8dff9c1fb268a.jpg" alt="" /> <div className="middle"><Link to="/products"><button className='prd-btn'>ПЕРЕЙТИ К ТОВАРУ</button></Link></div>
                </div>
                <div className="sample"><img className='preview-img' src="https://snaxstore.netlify.app/static/media/images-2.7c94e50143f6640fa30c.jpg" alt="" /> <div className="middle"><Link to="/products"><button className='prd-btn'>ПЕРЕЙТИ К ТОВАРУ</button></Link></div></div>
                <div className="sample"><img className='preview-img' src="https://snaxstore.netlify.app/static/media/shoes.eb0a721eb11c5ab7507b.jpg" alt="" />
                
                <div className="middle"><Link to="/products"><button className='prd-btn'>ПЕРЕЙТИ К ТОВАРУ</button></Link></div>
                </div>
            </div>
        </div>




    </div>
  )
}

export default Main