import { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    ProfileCard,
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    profileReducer,
} from 'app_entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'app_entities/Currency';
import { Country } from 'app_entities/Country';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const form = useSelector(getProfileForm);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

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

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
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
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
