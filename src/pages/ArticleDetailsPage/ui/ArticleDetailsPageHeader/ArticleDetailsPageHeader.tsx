import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

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
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article?.id) {
            navigate(getRouteArticleEdit(article?.id));
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
