import { useState } from 'react';

const Home = () => {
 const [blogs, setBlogs] = useState([
    {title: 'My new web site', body: 'Lorem ', author: 'mohamed', id: 1},
    {title: 'First list in react', body: 'Lorem ', author: 'mohamed', id: 2},
    {title: 'make adynamic list', body: 'Lorem ipsum ', author: 'mohamed', id: 3}
 ]);

    return ( 
        <div className="Home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                </div>
            ))}
            
        </div>
     );
}
 
export default Home;