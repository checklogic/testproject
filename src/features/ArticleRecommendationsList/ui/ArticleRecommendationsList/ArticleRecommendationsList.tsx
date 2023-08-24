import { ArticleList } from 'app_entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';

export const ArticleRecommendationsList = memo(
    function ArticleRecommendationsList() {
        const { t } = useTranslation();

        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack gap={8}>
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList
                    virtualized={false}
                    articles={articles}
                    target={'_blank'}
                />
            </VStack>
        );
    }
);
