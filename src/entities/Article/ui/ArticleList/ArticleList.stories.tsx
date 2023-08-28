import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { Article, ArticleView } from '../../model/types/article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { testArticle } from '@/shared/testData/testArticle/testArticle';

const article: Article = testArticle;

const meta = {
    component: ArticleList,
    title: 'entities/Article/ArticleList',
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingBig: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.BIG,
    },
};

export const LoadingSmall: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.SMALL,
    },
};

export const ListSmall: Story = {
    args: {
        articles: new Array(9).fill(0).map((item, index) => ({
            ...article,
            id: String(index),
        })),
        isLoading: false,
        view: ArticleView.SMALL,
    },
};
export const ListBig: Story = {
    args: {
        articles: new Array(4).fill(0).map((item, index) => ({
            ...article,
            id: String(index),
        })),
        isLoading: false,
        view: ArticleView.BIG,
    },
};
