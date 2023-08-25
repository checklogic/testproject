import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    component: EditableProfileCardHeader,
    title: 'features/EditableProfileCard/EditableProfileCardHeader',
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof EditableProfileCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
