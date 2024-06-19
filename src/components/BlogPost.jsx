/* eslint-disable react/prop-types */
import "../BlogPost.css";

function BlogPost(props) {
    return (
        <div id="blog-post-container">
            <h1 id="blog-post-heading">{props.title}</h1>
            <h3 id="blog-post-sub-text">{props.subTitle}</h3>
            <h4 id="blog-post-info">Posted by {props.author} on {props.date}</h4>
        </div>
    )
}

export default BlogPost;