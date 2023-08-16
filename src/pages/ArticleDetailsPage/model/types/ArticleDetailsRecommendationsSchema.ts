import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'app_entities/Article';

export interface ArticleDetailsRecommendationsSchema
    extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
