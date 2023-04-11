import FullwidthLayout from "../layouts/FullwidthLayout";
import { useEffect, useState } from "react";
import { getPostBySlug } from "../../data/rest";
import Loader from "../components/Loader/Loader";
import { useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost/SinglePost";

const SinglePostPage = () => {
    const [post, setPost] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        setIsLoading(true);

        getPostBySlug(params.slug || "").then((res) => {
            setPost(res.data[0]);
            setIsLoading(false);
        });
    }, [params]);

    return (
        <FullwidthLayout className="stories">
            {post && !isLoading ? (
                <SinglePost post={post} />
            ) : (
                <Loader isLoading={isLoading} />
            )}
        </FullwidthLayout>
    );
};

export default SinglePostPage;
