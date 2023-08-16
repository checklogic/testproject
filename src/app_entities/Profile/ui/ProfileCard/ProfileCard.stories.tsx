import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ProfileCard } from './ProfileCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'app_entities/Currency';
import { Country } from 'app_entities/Country';
import AvatarImg from 'shared/assets/test/testAvatar.jpg';

const meta = {
    component: ProfileCard,
    title: 'app_entities/ProfileCard',
    decorators: [StoreDecorator({})],
    args: {
        data: {
            first: 'Test',
            lastname: 'Test lastname',
            age: 21,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
            avatar: AvatarImg,
        },
    },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const ReadOnly: Story = {
    args: {
        readonly: true,
    },
};

export const IsLoadingDark: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const IsErrorDark: Story = {
    args: {
        error: '123',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
