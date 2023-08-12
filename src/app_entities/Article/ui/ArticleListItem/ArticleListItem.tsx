import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../module/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo(function ArticleListItem({
    className,
    article,
    view,
}: ArticleListItemProps) {
    const { t } = useTranslation();
    const [isHover, bindHover] = useHover();

    if (view === ArticleView.BIG) {
        return (
            <div
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                {article.title}
            </div>
        );
    }

    return (
        <div
            {...bindHover}
            className={classNames(cls.articleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <img
                        alt={article.title}
                        src={article.img}
                        className={cls.img}
                    />
                    <Text text={article.createdAt} className={cls.createdAt} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text
                        text={article.type.join(', ')}
                        className={cls.types}
                    />
                    <Text text={article.views} className={cls.viewsEye} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text title={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
