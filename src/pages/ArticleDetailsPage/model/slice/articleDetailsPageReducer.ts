import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types/ArticleDetailsPageSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';
import { articleDetailsRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        comments: articleDetailsCommentsReducer,
        recommendations: articleDetailsRecommendationsReducer,
    });
