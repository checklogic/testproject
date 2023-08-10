import {
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'app_entities/Profile';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
    className,
}) => {
    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setreadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div
            className={classNames(cls.profilePageHeader, {}, [className || ''])}
        >
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button onClick={onEdit} className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onCancelEdit}
                        className={cls.editBtn}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button onClick={onSave} className={cls.saveBtn}>
                        {t('Сохранить')}
                    </Button>
                </>
            )}
        </div>
    );
};
