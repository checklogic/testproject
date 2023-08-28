import { EntityState } from '@reduxjs/toolkit';
import { CommentEnt } from '@/entities/CommentEnt';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentEnt> {
    isLoading?: boolean;
    error?: string;
}
