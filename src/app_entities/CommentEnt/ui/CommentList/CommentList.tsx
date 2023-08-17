import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentEnt } from '../../model/types/CommentEnt';
import { VStack } from 'shared/ui/Stack';

interface CommentListProps {
    className?: string;
    comments?: CommentEnt[];
    isLoading?: boolean;
}

export const CommentList = memo(function CommentList({
    className,
    comments,
    isLoading,
}: CommentListProps) {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack className={classNames('', {}, [className])}>
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
            </VStack>
        );
    }

    return (
        <VStack gap={16} className={classNames('', {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        key={comment.id}
                        comment={comment}
                    />
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </VStack>
    );
});
