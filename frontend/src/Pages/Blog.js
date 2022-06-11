import React from 'react'
import axios from'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import BlogNav from '../Components/BlogNav';

const Blog = ( ) =>{

  const [blogs, setblogs] = useState([]);
  const [featuredBlog, setfeaturedBlog] = useState([]);

  useEffect(() => {
    const fetchData = async() =>{
      try {
        const res =await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`)
        setfeaturedBlog(res.data[0]);
        console.log(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])


  useEffect(() => {
    const fetchBlogs = async() =>{
      try {
        const res =await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`)
        setblogs(res.data);
      } catch (err) {
        console.error(err)
      }
    }

    fetchBlogs()
  }, [])
  
  const capitalizeFirstLetter = (word) => { 
    if(word)
      return word.charAt(0).toUpperCase( )+word.slice(1);
    return '';
  } 

  const  getBlogs = ()=> {
      let list = []
      let result = []

      blogs.map(blog =>{
              return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blog.category)}</strong>
                        <h3 className="mb-0">{blog.title}</h3>
                        <div className="mb-1 text-muted">{blog.month} {blog.day}</div>
                        <p className="card-text mb-auto">{blog.excerpt}</p>
                        <Link to={`/blog/${blog.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='250' height='250' src={blog.thumbnail} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
          result.push(
              <div key={i} className='row mb-2'>
                  <div className='col-md-6'>
                      {list[i]}
                  </div>
                  <div className='col-md-6'>
                      {list[i+1] ? list[i+1] : null}
                  </div>
              </div>
          )
      }

      return result
  }

  return(
    <div>
    <BlogNav />
      <div className="container mt-3">
      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                    <p className="lead my-3">{featuredBlog.excerpt}</p>
                    <p className="lead mb-0">
                        <Link to={`/blog/${featuredBlog.slug}`} className="text-white font-weight-bold">
                            Continue reading...
                        </Link>
                    </p>
                </div>
      </div>
      {getBlogs()}
      </div>
    </div>
  )

}

export default Blog

