export interface IBook {
    title: string,
    authors: string[],
    subtitle: string,
    description: string,
    categories: string[],
    imageLinks: {
        smallThumbnail: string,
        thumbnail: string,
    }
}


export type Sort = "relevance" | "newest";
export type Category = "all" | "art" | "biography" | "computers" | "history" | "medical";