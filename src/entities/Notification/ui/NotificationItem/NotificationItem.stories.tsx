import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notification';

const item: Notification = {
    description: '123',
    id: '1',
    title: 'title',
    userId: '1',
};

const meta = {
    component: NotificationItem,
    title: 'entities/Notification/NotificationItem',
    decorators: [],
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        item,
    },
    decorators: [],
};
