export type MdxPageLayout =
    | 'PostLayout'
    | 'ResumeLayout'
    | 'AuthorLayout';

export interface MdxFrontMatterProps {
    layout?: MdxPageLayout,
    title: string,
    date: string,
    slug: string,
    tags: Array<string>,
    lastmod?: string,
    name?: string
}