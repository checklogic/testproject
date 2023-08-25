import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '@/app_entities/Article/model/types/article';
import { Code } from '@/shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    function ArticleCodeBlockComponent({
        className,
        block,
    }: ArticleCodeBlockComponentProps) {
        return (
            <div className={classNames('', {}, [className])}>
                <Code text={block.code} />
            </div>
        );
    }
);
