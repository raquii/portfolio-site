import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';

function Blog({ title, description, img, date, slug }) {
    return (
        <div className="blog-card">
            <div className="blog-image-container">
                {img ? <img
                    alt={title}
                    src={img}
                    className="blog-img" />
                    :
                    <StaticImage
                        src='../assets/images/blogplaceholder.jpg'
                        alt="code snippet"
                        className="blog-img"
                        placeholder="blurred"
                    />
                }
            </div>
            <div className="blog-info" >
                <h2 className="blog-title">{title}</h2>
                <p className="blog-date">
                    <IoCalendarOutline /> {date}</p>
                <p>{description} <Link to={`/blog/${slug}`}>Read More</Link></p>
            </div>
        </div>
    )
};

export default Blog;
