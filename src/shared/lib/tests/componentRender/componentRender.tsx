import { RenderResult, render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { DeepPartial } from '@reduxjs/toolkit';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const ComponentRender = (
    component: ReactNode,
    options: ComponentRenderOptions
): RenderResult => {
    const { route = '/', initialState } = options;
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};
