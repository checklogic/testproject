import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(function Code({ className, text }: CodeProps) {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <div className={cls.codeWrapper}>
            <Button
                className={cls.copyBtn}
                onClick={onCopy}
                theme={ButtonTheme.CLEAR}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <pre className={classNames(cls.code, {}, [className])}>
                <code>{text}</code>
            </pre>
        </div>
    );
});
