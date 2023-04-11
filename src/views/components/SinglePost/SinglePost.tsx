import { FC } from "react";
import { Post } from "../../../types/global";
import Hero from "../Hero/Hero";
import "./SinglePost.scss";

type SinglePostProps = {
    post: Post;
};

const SinglePost: FC<SinglePostProps> = ({ post }) => {
    const heroSubline = post._embedded["wp:term"][0]
        .map((item: { name: string }) => {
            return item.name;
        })
        .join(" | ");

    return (
        <div className="single-post">
            <Hero
                title={post.title.rendered}
                label={post._embedded["author"][0].name}
                subline={heroSubline}
                image={post._embedded["wp:featuredmedia"][0]["source_url"]}
            />
            <div
                className="post"
                dangerouslySetInnerHTML={{
                    __html: post.content.rendered,
                }}
            ></div>
        </div>
    );
};

export default SinglePost;
