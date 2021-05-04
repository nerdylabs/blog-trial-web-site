import React from 'react'
import image from '../../assets/joel2.jpg'

import './display-picture.css'

const DisplayPicture = ()=>(
    <div className="display-img">
        <img src={image} alt="img"/>
    </div>
)

export default DisplayPicture;