import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleView } from '@/app_entities/Article';
import { ArticleType } from '@/app_entities/Article/model/types/article';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filter
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}
