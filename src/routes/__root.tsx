import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '../components/Navbar/Navbar'
import NotFound from '../components/NotFound/NotFound'

export const Route = createRootRoute({
    component: () => <>
        <div className="bg-slate-900 min-h-screen">
            <Navbar />
            <Outlet />
        </div>
    </>,
    notFoundComponent: () => {
        return <NotFound />
    },
})