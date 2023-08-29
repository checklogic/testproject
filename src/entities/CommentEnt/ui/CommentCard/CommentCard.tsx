import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { memo } from 'react';
import { CommentEnt } from '../../model/types/CommentEnt';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: CommentEnt;
    isLoading?: boolean;
}

export const CommentCard = memo(function CommentCard({
    className,
    comment,
    isLoading,
}: CommentCardProps) {
    if (isLoading) {
        return (
            <div
                className={classNames(cls.commentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div>
                    <Skeleton border={'50%'} width={30} height={30} />
                    <Skeleton
                        className={cls.username}
                        height={16}
                        width={100}
                    />
                </div>
                <Skeleton width={'100%'} height={50} />
            </div>
        );
    }

    if (!comment) return null;

    return (
        <VStack
            gap={8}
            className={classNames(cls.commentCard, {}, [className])}
        >
            <AppLink to={getRouteProfile(comment.user.id)}>
                {comment.user.avatar ? (
                    <Avatar size={30} src={comment.user.avatar} />
                ) : null}
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
});
