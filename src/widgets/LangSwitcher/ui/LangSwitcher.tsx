import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(function LangSwitcher({
    className,
    short,
}: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div>
            <Button
                className={classNames(cls.langSwitcher, {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={toggle}
            >
                {t(short ? 'Короткий язык' : 'Язык')}
            </Button>
        </div>
    );
});
