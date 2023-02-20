import { PATH } from '@/constants/path';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home'));

export default function RoutesConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={PATH.HOME}
                    element={
                        <Suspense fallback={<>...</>}>
                            <HomePage />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
