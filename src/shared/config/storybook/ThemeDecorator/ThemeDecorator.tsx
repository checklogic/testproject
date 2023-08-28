import { Theme } from '@/shared/const/theme';
import { Decorator } from '@storybook/react';

export const ThemeDecorator = (theme: Theme = Theme.LIGTH): Decorator => {
    return function StoryComponent(Story) {
        return (
            <div className={`app ${theme}`}>
                <Story />
            </div>
        );
    };
};
