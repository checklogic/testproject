import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import JSImage from '@/shared/assets/test/JSImage.jpeg';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';

const profile: Profile = {
    age: 19,
    avatar: JSImage,
    city: 'Moscow',
    country: Country.Russia,
    currency: Currency.USD,
    first: 'firstname',
    lastname: 'lastname',
    id: '1',
    username: 'username',
};

const meta = {
    component: ProfilePage,
    title: 'pages/ProfilePage',
    decorators: [
        StoreDecorator({
            profile: {
                form: profile,
                data: profile,
            },
        }),
    ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
