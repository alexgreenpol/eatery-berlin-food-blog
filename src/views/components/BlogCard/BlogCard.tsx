import { FC } from "react";
import { Link } from "react-router-dom";
import "./BlogCard.scss";

type BlogCardProps = {
    image: string;
    categories: string;
    title: string;
    link: string;
    postId: number;
};

const BlogCard: FC<BlogCardProps> = ({
    postId,
    image,
    categories,
    title,
    link,
}) => {
    return (
        <Link to={link} state={postId}>
            <div className="blog-card">
                <div className="blog-card__image">
                    <img src={image} alt="" />
                </div>
                <div className="blog-card__content">
                    <p className="blog-card__categories uppercase--mini">
                        {categories}
                    </p>
                    <h5 className="blog-card__title">{title}</h5>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
