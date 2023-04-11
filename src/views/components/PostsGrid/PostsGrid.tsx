import { FC } from "react";
import { Post } from "../../../types/global";
import BlogCard from "../BlogCard/BlogCard";
import "./PostsGrid.scss";

type PostGridProps = {
    posts: Post[];
};

const PostsGrid: FC<PostGridProps> = ({ posts }) => {
    return (
        <div className="posts-grid">
            {posts.map((item) => {
                const cardSubline = item._embedded["wp:term"][0]
                    .map((item: { name: string }) => {
                        return item.name;
                    })
                    .join(" | ");

                const postRoute = item.link.replace(
                    process.env.REACT_APP_WP_DOMAIN || "",
                    ""
                );

                return (
                    <BlogCard
                        postId={item.id}
                        title={item.title.rendered}
                        image={
                            item._embedded["wp:featuredmedia"][0]["source_url"]
                        }
                        link={postRoute}
                        categories={cardSubline}
                        key={item.id}
                    />
                );
            })}
        </div>
    );
};

export default PostsGrid;
