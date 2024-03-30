import { createFileRoute } from '@tanstack/react-router'
import Analysis from '../components/Analysis/Analysis'

export const Route = createFileRoute('/analysis')({
    component: () => <Analysis />
})