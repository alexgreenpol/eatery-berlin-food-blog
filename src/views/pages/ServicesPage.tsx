import { useEffect, useState } from "react";
import { getPostsByCategory } from "../../data/rest";
import { CategoriesEnum } from "../../types/global";
import FullwidthLayout from "../layouts/FullwidthLayout";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import PostsGrid from "../components/PostsGrid/PostsGrid";
import Loader from "../components/Loader/Loader";

const ServicesPage = () => {
    const [posts, setPosts] = useState<any>([]);

    useEffect(() => {
        getPostsByCategory(CategoriesEnum.SERVICES).then((res) => {
            setPosts(res);
        });
    }, []);

    return (
        <FullwidthLayout className="services">
            <h1>Services</h1>

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

export default ServicesPage;
