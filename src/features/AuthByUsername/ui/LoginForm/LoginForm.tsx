import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(function LoginFormInMemo({
    className,
    onSuccess,
}: LoginFormProps) {
    const { t } = useTranslation();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const dispatch = useAppDispatch();

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(async () => {
        if (username && password) {
            const result = await dispatch(
                loginByUsername({ username, password })
            );
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess();
            }
        }
    }, [dispatch, onSuccess, password, username]);

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onLoginClick();
        },
        [onLoginClick]
    );

    return (
        <DynamicModuleLoader
            removeAfterUnmount={false}
            reducers={initialReducers}
        >
            <form onSubmit={handleSubmit}>
                <div className={classNames(cls.loginForm, {}, [className])}>
                    <Text title={t('Форма авторизации')} />
                    {error && <Text text={error} theme={TextTheme.ERROR} />}
                    <Input
                        autoFocus
                        placeholder={t('Введите логин')}
                        type='text'
                        className={cls.input}
                        onChange={onChangeUsername}
                        value={username || ''}
                    />
                    <Input
                        placeholder={t('Введите пароль')}
                        type='text'
                        className={cls.input}
                        onChange={onChangePassword}
                        value={password || ''}
                    />
                    <Button
                        disabled={isLoading}
                        className={cls.loginBtn}
                        onClick={onLoginClick}
                    >
                        {t('Войти')}
                    </Button>
                </div>
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
