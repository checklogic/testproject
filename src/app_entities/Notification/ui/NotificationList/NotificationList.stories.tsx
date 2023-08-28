import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    component: NotificationList,
    title: 'app_entities/Notification/NotificationList',
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Уведомление',
                        description: 'Текст сообщения',
                    },
                    {
                        id: '2',
                        title: 'Уведомление 2',
                        description: 'Текст сообщения',
                    },
                    {
                        id: '3',
                        title: 'Уведомление 3',
                        description: 'Текст сообщения',
                    },
                ],
            },
        ],
    },
};
