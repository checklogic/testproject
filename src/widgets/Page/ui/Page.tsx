import {
    MutableRefObject,
    ReactNode,
    UIEvent,
    UIEventHandler,
    memo,
    useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getScrollPositionByPath,
    scrollHandlerActions,
} from 'features/ScrollHandler';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useTrottle } from 'shared/lib/hooks/useTrottle/useTrottle';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo(function Page({
    className,
    children,
    onScrollEnd,
}: PageProps) {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPositionByPath = useSelector((state: StateSchema) =>
        getScrollPositionByPath(state, pathname)
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPositionByPath;
    });

    const onScroll = useTrottle((event: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollHandlerActions.setScrollPosition({
                path: pathname,
                position: event.currentTarget.scrollTop,
            })
        );
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
