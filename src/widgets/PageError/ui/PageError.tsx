import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

const reloadPage = (): void => {
    location.reload();
};

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.PageError, {}, [className || ''])}>
            <p> {t('Произошла непредвиденная ошибка')}</p>
            <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
