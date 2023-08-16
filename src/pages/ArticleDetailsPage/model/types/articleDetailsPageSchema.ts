import { ArticleDetailsCommentsSchema } from './articleDetailsCommentSchema';
import { ArticleDetailsPageRecommendationSchema } from './articleDetailsPageRecommendationSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationSchema;
}
