import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className || ''])}>
            <Input
                autoFocus
                placeholder={t('Введите логин')}
                type='text'
                className={cls.input}
            />
            <Input
                placeholder={t('Введите пароль')}
                type='text'
                className={cls.input}
            />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
