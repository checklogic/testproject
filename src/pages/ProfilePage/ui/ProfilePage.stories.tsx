import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'app_entities/Country';
import { Currency } from 'app_entities/Currency';
import AvatarImg from 'shared/assets/test/testAvatar.jpg';

const meta = {
    component: ProfilePage,
    title: 'Pages/ProfilePage',
    decorators: [
        StoreDecorator({
            profile: {
                readonly: true,
                isLoading: false,
                form: {
                    first: 'Elco',
                    lastname: 'Elcome',
                    age: 21,
                    currency: Currency.USD,
                    country: Country.Russia,
                    city: 'Moscow',
                    username: 'admin',
                    avatar: AvatarImg,
                },
            },
        }),
    ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
