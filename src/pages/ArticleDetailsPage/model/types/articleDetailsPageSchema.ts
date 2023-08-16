import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentSchema';
import { ArticleDetailsPageRecommendationSchema } from './ArticleDetailsPageRecommendationSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationSchema;
}
