import React from 'react'
import Blog from '../../components/blogs/blogs'


const BlogPage = ({articles})=>(
  <div>
    <Blog articles = {articles} />
  </div>
)

export default BlogPage;