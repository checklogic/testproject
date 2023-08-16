import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'app_entities/Article';

export interface ArticleDetailsRecommendationSchema
    extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
