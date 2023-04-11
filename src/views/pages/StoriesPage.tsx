import { useEffect, useState } from "react";
import { getPostsByCategory } from "../../data/rest";
import { CategoriesEnum } from "../../types/global";
import FullwidthLayout from "../layouts/FullwidthLayout";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import HeadingBox from "../components/HeadingBox/HeadingBox";
import ServicesList from "../components/ServicesList/ServicesList";
import PostsGrid from "../components/PostsGrid/PostsGrid";
import Loader from "../components/Loader/Loader";

const StoriesPage = () => {
    const [posts, setPosts] = useState<any>([]);

    useEffect(() => {
        getPostsByCategory(CategoriesEnum.STORIES).then((res) => {
            setPosts(res);
        });
    }, []);

    return (
        <FullwidthLayout className="stories">
            <h1>Stories</h1>

            {posts.data ? (
                <PostsGrid posts={posts.data} />
            ) : (
                <Loader isLoading={true} />
            )}

            <SocialButtons
                facebookUrl="#"
                twitterUrl="#"
                instagramUrl="#"
                youtubeUrl="#"
                linkedinUrl="#"
            />
            <SubscribeForm />
        </FullwidthLayout>
    );
};

export default StoriesPage;
