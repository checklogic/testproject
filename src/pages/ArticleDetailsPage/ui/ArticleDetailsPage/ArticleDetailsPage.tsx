import { ArticleDetails, ArticleList } from 'app_entities/Article';
import { CommentList } from 'app_entities/CommentEnt';
import { AddCommentForm } from 'features/AddCommentForm';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import { getArticleRecommendations } from '../../model/slice/articleDetailsPageRecommendationsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(
        getArticleRecommendationsIsLoading
    );
    // const error = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                <Button
                    onClick={onBackToList}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.backBtn}
                >
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    title={t('Рекомендуем')}
                    className={cls.commentTitle}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target={'_blank'}
                />

                <Text
                    size={TextSize.L}
                    title={t('Комментарии')}
                    className={cls.commentTitle}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
