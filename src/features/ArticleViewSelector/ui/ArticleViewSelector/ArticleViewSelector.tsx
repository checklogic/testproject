import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/app_entities/Article';
import TilesIcon from '@/shared/assets/icons/tiles-24-24.svg';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TilesIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo(function ArticleViewSelector({
    className,
    view,
    onViewClick,
}: ArticleViewSelectorProps) {
    const onClick = (newView: ArticleView) => {
        return () => onViewClick?.(newView);
    };

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((el, i) => (
                <Button
                    key={i}
                    onClick={onClick(el.view)}
                    theme={ButtonTheme.CLEAR}
                >
                    <Icon
                        Svg={el.icon}
                        className={classNames('', {
                            [cls.notSelected]: el.view !== view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
});
