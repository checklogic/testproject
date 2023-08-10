import { Country, CountrySelect } from 'app_entities/Country';
import { Currency, CurrencySelect } from 'app_entities/Currency';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (currency: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div
                className={classNames(cls.profileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Spinner />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.profileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке')}
                    text={t('Попробуйте перезагрузить страницу')}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first || ''}
                    placeholder={t('Ваше имя')}
                    onChange={onChangeFirstname}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname || ''}
                    placeholder={t('Ваша фамилия')}
                    onChange={onChangeLastname}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    value={data?.age || ''}
                    placeholder={t('Ваше возраст')}
                    onChange={onChangeAge}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    value={data?.city || ''}
                    placeholder={t('Город')}
                    onChange={onChangeCity}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    value={data?.username || ''}
                    placeholder={t('Username')}
                    onChange={onChangeUsername}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar || ''}
                    placeholder={t('Аватар')}
                    onChange={onChangeAvatar}
                    className={cls.input}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    onChange={onChangeCurrency}
                    value={data?.currency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    onChange={onChangeCountry}
                    value={data?.country}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
