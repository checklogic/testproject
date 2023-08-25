import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    component: Page,
    title: 'widgets/Page',
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'test',
    },
};
