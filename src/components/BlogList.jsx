/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "../BlogList.css";
import BlogPost from "./BlogPost";
import posts from "../../blog-data.json";

function BlogList() {
    
    
    return (
        <div id="blog-list">
            <ul>
                {posts.map((post) => {
                    return (
                    <li><BlogPost 
                            title={post.title}
                            subTitle={post.subTitle}
                            author={post.author}
                            date={post.date}
                        />
                    </li>
                    
                )})}
            </ul>
            <div id="button-container">
                <button type="button">Older Posts</button>
            </div>
            
        </div>
    )
}

export default BlogList;