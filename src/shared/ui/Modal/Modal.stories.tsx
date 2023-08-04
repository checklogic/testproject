import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Modal } from './Modal';

const meta = {
    component: Modal,
    title: 'Shared/Modal',
    args: {
        isOpen: true,
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti iste ipsa, ipsum temporibus quo perspiciatis atque voluptate tenetur sequi dolore accusamus, quasi labore voluptatibus quidem nobis. Ipsa, earum temporibus.',
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const Dark: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti iste ipsa, ipsum temporibus quo perspiciatis atque voluptate tenetur sequi dolore accusamus, quasi labore voluptatibus quidem nobis. Ipsa, earum temporibus.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
