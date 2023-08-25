import { EntityState } from '@reduxjs/toolkit';
import { CommentEnt } from '@/app_entities/CommentEnt';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentEnt> {
    isLoading?: boolean;
    error?: string;
}
