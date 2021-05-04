import React from 'react'
import './blogs.css'
import DisplayPicture from '../display-picture/display-picture'
import image from '../../assets/professional-images-for-website-background-13-Ride-Now-Pte-Ltd.jpg'
const Blogs = ({articles}) =>{
    console.log(articles)
    return(

    <div>
        {
        
            articles.map(article=>(
            <div key={article.createdAt} className='my-card mt bg'>
                <img src={image} alt=""/>
                 <div className="card-body">
                     <div className='blog-body'>
                        <h4 className="title">{article.title}</h4>
                        <div className="card-subtitle text-muted mb-2">
                            {article.createdAt.toLocaleString()}
                        </div>
                        <div className="card-text mb-2">
                        {article.description}  
                        </div>
                    </div>
                    <div className='display-img'>
                        <DisplayPicture />
                    </div>
                </div>
             </div>
            ))
        }
    </div>
)}
export default Blogs;