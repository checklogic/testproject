import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentSchema';
import { ArticleDetailsRecommendationSchema } from './ArticleDetailsPageRecommendationSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationSchema;
}
