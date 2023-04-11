// TYPES

export type Post = {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    link: string;
    _embedded: {
        author: [{ name: string }];
        ["wp:featuredmedia"]: [{ source_url: string }];
        ["wp:term"]: [[{ name: string }]];
    };
};

// ENUMS

export enum CategoriesEnum {
    STORIES = 2,
    SERVICES = 3,
}
