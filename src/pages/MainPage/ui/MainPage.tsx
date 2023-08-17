import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox, ListBoxItem } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page';

const MainPage = (): ReactNode => {
    const { t } = useTranslation('main');

    const items: ListBoxItem[] = [
        { value: 'first', content: 'first' },
        { value: 'second', content: 'second', disabled: true },
        { value: 'third', content: 'third' },
    ];

    return (
        <Page>
            {t('Главная страница')}
            <ListBox
                value={undefined}
                defaultValue={'Выберите значение'}
                onChange={() => {}}
                items={items}
            />
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </Page>
    );
};

export default MainPage;
