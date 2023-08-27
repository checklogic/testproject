import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/app_entities/Rating';

const MainPage = (): ReactNode => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <RatingCard
                title={'Как вам статья'}
                feedbackTitle={'Оставьте отзыв о статье'}
                hasFeedback={true}
            />
        </Page>
    );
};

export default MainPage;
