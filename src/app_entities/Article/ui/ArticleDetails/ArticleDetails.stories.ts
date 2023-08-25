import type { Meta, StoryObj } from '@storybook/react';
import { Article } from '@/app_entities/Article/model/types/article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { testArticle } from '@/shared/testData/testArticle/testArticle';
import { ArticleDetails } from './ArticleDetails';

const article: Article = testArticle;

const meta = {
    component: ArticleDetails,
    title: 'app_entities/ArticleDetails',
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
    ],
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { id: '1' },
    decorators: [],
};

export const Loading: Story = {
    args: { id: '1' },
    decorators: [
        StoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        }),
    ],
};

export const Error: Story = {
    args: { id: '1' },
    decorators: [
        StoreDecorator({
            articleDetails: {
                error: 'error',
            },
        }),
    ],
};
