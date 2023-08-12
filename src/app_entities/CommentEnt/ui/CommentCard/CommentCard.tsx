import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentEnt } from '../../model/types/CommentEnt';
import cls from './CommentCard.module.scss';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Sceleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

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
                <div className={cls.header}>
                    <Skeleton border={'50%'} width={30} height={30} />
                    <Skeleton
                        className={cls.username}
                        height={16}
                        width={100}
                    />
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </div>
        );
    }

    if (!comment) return null;

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
                className={cls.header}
            >
                {comment.user.avatar ? (
                    <Avatar size={30} src={comment.user.avatar} />
                ) : null}
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
