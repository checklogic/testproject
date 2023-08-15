import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'app_entities/User';
import { getArticleDetailsData } from 'app_entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';

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
        <div
            className={classNames(cls.articleDetailsPageHeader, {}, [
                className,
            ])}
        >
            <Button
                onClick={onBackToList}
                theme={ButtonTheme.OUTLINE}
                className={cls.backBtn}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    onClick={onEditArticle}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});
