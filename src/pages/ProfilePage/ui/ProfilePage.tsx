import { Country } from 'app_entities/Country';
import { Currency } from 'app_entities/Currency';
import {
    ProfileCard,
    ValidateProfileError,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from 'app_entities/Profile';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    // const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const form = useSelector(getProfileForm);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslation = {
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t(
            'Некорректно указана страна'
        ),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Некорректно указано имя пользователя'
        ),
        [ValidateProfileError.NO_DATA]: t('Не удалось получить информацию'),
        [ValidateProfileError.SERVER_ERROR]: t('Сервеная ошибка'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    first: value || '',
                })
            );
        },
        [dispatch]
    );
    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    lastname: value || '',
                })
            );
        },
        [dispatch]
    );
    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    city: value || '',
                })
            );
        },
        [dispatch]
    );
    const onChangeAge = useCallback(
        (value?: string) => {
            const ageValue = value?.replace(/[^\d.]/g, '');
            dispatch(
                profileActions.updateProfile({
                    age: Number(ageValue || 0),
                })
            );
        },
        [dispatch]
    );
    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    username: value || '',
                })
            );
        },
        [dispatch]
    );
    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    avatar: value || '',
                })
            );
        },
        [dispatch]
    );
    const onChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(
                profileActions.updateProfile({
                    currency: value,
                })
            );
        },
        [dispatch]
    );
    const onChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(
                profileActions.updateProfile({
                    country: value,
                })
            );
        },
        [dispatch]
    );

    const renderErrors = () => {
        if (validateErrors?.length) {
            return validateErrors.map((err, i) => (
                <Text
                    theme={TextTheme.ERROR}
                    text={validateErrorTranslation[err]}
                    key={String(err) + String(i)}
                />
            ));
        }
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <VStack gap={'16'}>
                    <ProfilePageHeader />
                    {renderErrors()}
                    <ProfileCard
                        readonly={readonly}
                        data={form}
                        isLoading={isLoading}
                        error={error}
                        onChangeFirstname={onChangeFirstname}
                        onChangeLastname={onChangeLastname}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeAvatar={onChangeAvatar}
                        onChangeUsername={onChangeUsername}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
