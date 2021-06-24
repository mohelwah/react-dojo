import { useState } from 'react';
import BlogList from './Bloglist';

const Home = () => {
 const [blogs, setBlogs] = useState([
    {title: 'My new web site', body: 'Lorem ', author: 'mohamed', id: 1},
    {title: 'First list in react', body: 'Lorem ', author: 'Ahmed', id: 2},
    {title: 'make adynamic list', body: 'Lorem ipsum ', author: 'mohamed', id: 3}
 ]);

 const handleDelete = (id) => {
    const newBlogs = blogs.filter (blog => blog.id !== id );
    setBlogs(newBlogs);
 }

    return ( 
        <div className="Home">
            <BlogList blogs = { blogs } title = "All Blogs List !" handleDelete = {handleDelete}/>
            <BlogList blogs = { blogs.filter( (blog) => blog.author === 'mohamed' ) }   handleDelete = {handleDelete} title = "Mohamed Blogs List !" />
        </div>
     );
}
 
export default Home;