import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    rating?: number;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo(function RatingCard({
    className,
    title,
    feedbackTitle,
    hasFeedback,
    rating = 0,
    onCancel,
    onAccept,
}: RatingCardProps) {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rating);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept]
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <VStack gap={32}>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
            <HStack gap={16} justify={'end'}>
                <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                    {t('Закрыть')}
                </Button>
                <Button onClick={acceptHandler}>{t('Отправить')}</Button>
            </HStack>
        </VStack>
    );

    return (
        <Card
            max={true}
            className={classNames(cls.ratingCard, {}, [className])}
        >
            <VStack align={'center'} gap={8}>
                <Text title={starsCount ? t('Спасибо за оценку') : title} />
                <StarRating
                    size={40}
                    selectedStars={starsCount}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen}>{modalContent}</Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    );
});
