import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    ProfileCard,
    fetchProfileData,
    profileReducer,
} from 'app_entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
