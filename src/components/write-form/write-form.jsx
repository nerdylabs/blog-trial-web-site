import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import {firestore} from '../../firebase/firebase-utils'
import {withRouter} from 'react-router-dom'
import './write-form.css';

const WriteForm = ({heading, history})=>{
    const [blogTitle, setTitle] = useState('')
    const [desc, setDesc] = useState('');
    const [content, setContent] = useState('');
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        firestore.collection('articles').add({
            title : blogTitle,
            description:desc,
            content : content,
            createdAt : new Date()
        })
        history.push('/')
    }

    const handleTitleChange=(e)=>{
        setTitle(e.target.value)
    }

    const handleDescChange=(e)=>{
        setDesc(e.target.value)
    }

    const handleContentChange=(e)=>{
        setContent(e.target.value)
    }

    return(
        <Fragment>
        <h1>{heading}</h1>
        <form method='POST' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input required type="text" name='title' id='title' className='form-control my-style' onChange={handleTitleChange}/>

            </div>
            <div className="form-group">
                <label htmlFor="discription">Description</label>
                <textarea required type="text" name='discription' id='discription' className='form-control my-style' onChange={handleDescChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="markdown">Content</label>
                <textarea required type="text" name='markdown' id='markdown' className='form-control my-style' onChange={handleContentChange}/>
            </div>
            <Link to='/blogs' className='btn my-btn2'>Cancel</Link>
            <button type='submit' className='btn my-btn'>Save</button>
        </form>

        </Fragment>
    )
}

export default withRouter(WriteForm);