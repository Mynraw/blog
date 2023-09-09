import type readingTime from 'reading-time'

export type ReadingTime = ReturnType<typeof readingTime>;

export type MdxPageLayout =
    | 'PostLayout'
    | 'ResumeLayout'
    | 'AuthorLayout'
    | 'ProjectsLayout';

export interface MdxFrontMatterProps {
    layout?: MdxPageLayout,
    title: string,
    date: string,
    slug: string,
    tags: Array<string>,
    lastmod?: string,
    name?: string,
    summary: string
    images?: Array<string> | string
}

export interface MdxLayoutRendererProps {
    layout: MdxPageLayout,
    mdxSource: string,
    frontMatter: MdxFrontMatterProps,
}

export interface BlogFrontMatterProps {
    readingTime: ReadingTime,
    fileName: string,
}