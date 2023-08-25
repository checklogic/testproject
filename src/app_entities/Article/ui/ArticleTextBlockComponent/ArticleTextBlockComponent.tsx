import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    function ArticleTextBlockComponent({
        className,
        block,
    }: ArticleTextBlockComponentProps) {
        return (
            <div className={classNames('', {}, [className])}>
                {block.title && (
                    <Text title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map((el, i) => (
                    <Text
                        key={String(block.id) + '---' + String(i)}
                        text={el}
                        className={cls.paragraph}
                    />
                ))}
            </div>
        );
    }
);
