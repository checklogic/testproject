import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { testArticle } from '@/shared/testData/testArticle/testArticle';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

const article: Article = testArticle;

const meta = {
    component: ArticleListItem,
    title: 'entities/Article/ArticleListItem',
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BIG: Story = {
    args: {
        view: ArticleView.BIG,
        article,
    },
};

export const SMALL: Story = {
    args: {
        view: ArticleView.SMALL,
        article,
    },
};
