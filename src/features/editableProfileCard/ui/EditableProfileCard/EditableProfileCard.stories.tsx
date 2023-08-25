import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    component: EditableProfileCard,
    title: 'features/EditableProfileCard/EditableProfileCard',
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: '1',
    },
    decorators: [],
};
