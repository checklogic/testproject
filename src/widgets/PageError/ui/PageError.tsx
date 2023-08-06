import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

const reloadPage = (): void => {
    location.reload();
};

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.pageError, {}, [className || ''])}>
            <p> {t('Произошла непредвиденная ошибка')}</p>
            <Button theme={ButtonTheme.CLEAR} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
