import { ArticleSortField } from '@/entities/Article';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/Select';
import cls from './ArticlesSortSelector.module.scss';

interface ArticlesSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOreder: SortOrder) => void;
}

export const ArticlesSortSelector = memo(function ArticlesSortSelector({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
}: ArticlesSortSelectorProps) {
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t]
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('количеству просмотров'),
            },
        ],
        [t]
    );

    return (
        <div className={classNames(cls.articlesSortSelector, {}, [className])}>
            <Select
                value={sort}
                onChange={onChangeSort}
                options={sortFieldOptions}
                label={t('Сортировать по')}
            />

            <Select
                value={order}
                onChange={onChangeOrder}
                options={orderOptions}
                label={t('по')}
            />
        </div>
    );
});
