import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../module/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(function ArticleListItem({
    className,
    article,
    view,
    target,
}: ArticleListItemProps) {
    const { t } = useTranslation();

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={article.views} className={cls.viewsEye} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;

        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar}></Avatar>
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />

                        <Text
                            text={article.createdAt}
                            className={cls.createdAt}
                        />
                    </div>

                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={RoutePath.article_details + article.id}>
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames('', {}, [className, cls[view]])}
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
                    {types}
                    {views}
                </div>
                <Text title={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
