// lib/api/types.ts
export interface ArticlePreview {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    author: string;
    createdAt: string;
  }
  
export interface Article extends ArticlePreview {
content: string;
metadata: {
    images: Array<{
    url: string;
    alt: string;
    }>;
    authors: string[];
};
}

export interface ImageMetadata {
    url: string;
    alt: string;
    type: string;
    credit: string;
    caption: string;
}