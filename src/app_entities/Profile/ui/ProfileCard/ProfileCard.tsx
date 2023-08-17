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
import { HStack, VStack } from 'shared/ui/Stack';

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
            <HStack
                justify={'center'}
                className={classNames(cls.profileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Spinner />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify={'center'}
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
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            gap={16}
            className={classNames(cls.profileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify={'center'}>
                    <Avatar src={data.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first || ''}
                placeholder={t('Ваше имя')}
                onChange={onChangeFirstname}
                readonly={readonly}
            />
            <Input
                value={data?.lastname || ''}
                placeholder={t('Ваша фамилия')}
                onChange={onChangeLastname}
                readonly={readonly}
            />
            <Input
                value={data?.age || ''}
                placeholder={t('Ваше возраст')}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city || ''}
                placeholder={t('Город')}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username || ''}
                placeholder={t('Username')}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar || ''}
                placeholder={t('Аватар')}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                onChange={onChangeCurrency}
                value={data?.currency}
                readonly={readonly}
            />
            <CountrySelect
                onChange={onChangeCountry}
                value={data?.country}
                readonly={readonly}
            />
        </VStack>
    );
};
