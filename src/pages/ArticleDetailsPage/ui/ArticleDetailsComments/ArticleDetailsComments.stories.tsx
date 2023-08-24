import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    component: ArticleDetailsComments,
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: '1',
    },
    decorators: [],
};
