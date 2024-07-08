import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BlogDetailPage.css';
import CloudinaryImage from './CloudinaryImage';
import SampleBlog from '../components/SampleBlog';

const BlogDetailPage = () => {
  function findBlogById(id,blogs) {
    return blogs.find(blog => blog._id === id);
}
    
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const blogLocal = findBlogById(id,SampleBlog);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        setBlog(blogLocal)
        console.error('Failed to fetch blog:', error);
      }
    };

    fetchBlog();
  }, [id,blogLocal]);

  return (
    <Container className="blog-detail-container">
      <Box className="blog-detail-box" sx={{marginTop:'1rem'}}>
        <Typography variant="h3" gutterBottom>{blog.title}</Typography>
        <Typography variant="subtitle1" gutterBottom sx={{fontStyle:"italic"}}>by {blog.author}</Typography>
        <CloudinaryImage public_id={blog.public_id}/>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </Box>
    </Container>
  );
};

export default BlogDetailPage;
