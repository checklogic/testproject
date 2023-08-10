import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './testAvatar.jpg';

const meta = {
    component: Avatar,
    title: 'Shared/Avatar',
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const SmallLight: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
