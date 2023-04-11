import axios from "axios";

export const getPosts = () => {
    return axios
        .get(`${process.env.REACT_APP_WP_DOMAIN}/wp-json/wp/v2/posts/?_embed`)
        .then((response: any) => response)
        .catch((error: any) => console.log(error));
};

export const getPostBySlug = (slug: string) => {
    return axios
        .get(
            `${process.env.REACT_APP_WP_DOMAIN}/wp-json/wp/v2/posts?_embed&slug=${slug}`
        )
        .then((response: any) => response)
        .catch((error: any) => console.log(error));
};

export const getPostsByCategory = (id: number) => {
    return axios
        .get(
            `${process.env.REACT_APP_WP_DOMAIN}/wp-json/wp/v2/posts?_embed&categories=${id}`
        )
        .then((response: any) => response)
        .catch((error: any) => console.log(error));
};
