import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'app_entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
}
