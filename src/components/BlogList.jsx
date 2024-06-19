import "../BlogList.css";
import BlogPost from "./BlogPost";

function BlogList() {
    return (
        <div id="blog-list">
            <ul>
                <li><BlogPost /></li>
                <hr />
            </ul>
            <div id="button-container">
                <button type="button">Older Posts</button>
            </div>
            
        </div>
    )
}

export default BlogList;