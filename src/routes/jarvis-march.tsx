import { createFileRoute } from '@tanstack/react-router'
import JarvisMarchAlgorithm from '../components/JarvisMarch/JarvisMarchAlgorithm'

export const Route = createFileRoute('/jarvis-march')({
    component: () => <JarvisMarchAlgorithm />
})