import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime'
import Navbar from '../components/Navbar/Navbar'

export const Route = createRootRoute({
    component: () => <Fragment>
        <Navbar />
        <Outlet />
    </Fragment>
})