import { getArticleDetailsData } from '@/app_entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';
import { HStack } from '@/shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(function ArticleDetailsPageHeader({
    className,
}: ArticleDetailsPageHeaderProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article?.id) {
            navigate(RoutePath.article_details + `${article?.id}/edit`);
        }
    }, [article?.id, navigate]);

    return (
        <HStack
            gap={16}
            justify={'between'}
            className={classNames(cls.articleDetailsPageHeader, {}, [
                className,
            ])}
        >
            <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button onClick={onEditArticle} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
});
