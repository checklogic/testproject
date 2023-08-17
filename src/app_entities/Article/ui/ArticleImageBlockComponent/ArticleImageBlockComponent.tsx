import { ArticleImageBlock } from 'app_entities/Article/model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    function ArticleImageBlockComponent({
        className,
        block,
    }: ArticleImageBlockComponentProps) {
        return (
            <div className={classNames('', {}, [className])}>
                <img alt={block.title} src={block.src} className={cls.img} />
                {block.title && (
                    <Text text={block.title} className={TextAlign.CENTER} />
                )}
            </div>
        );
    }
);
