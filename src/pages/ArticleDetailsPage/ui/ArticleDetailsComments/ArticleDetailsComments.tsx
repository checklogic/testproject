import { Suspense, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CommentList } from '@/app_entities/CommentEnt';
import { AddCommentForm } from '@/features/AddCommentForm';
import { TextSize, Text } from '@/shared/ui/Text/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleCommentsIsLoading } from '@/pages/ArticleDetailsPage/model/selectors/comments';
import { addCommentForArticle } from '@/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '@/pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice';
import { useSelector } from 'react-redux';
import { fetchCommentsByArticleId } from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';

interface ArticleDetailsCommentsProps {
    id: string;
    className?: string;
}

export const ArticleDetailsComments = memo(function ArticleDetailsComments({
    id,
}: ArticleDetailsCommentsProps) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    return (
        <VStack gap={8}>
            <Text size={TextSize.L} title={t('Комментарии')} />
            <Suspense fallback={<PageLoader />}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList isLoading={isLoading} comments={comments} />
        </VStack>
    );
});
