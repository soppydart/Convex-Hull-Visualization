import { createFileRoute } from '@tanstack/react-router'
import KirkpatrickSeidel from '../components/KirkpatrickSiedel/KirkpatrickSeidelAlgorithm'

export const Route = createFileRoute('/kirkpatrick-seidel')({
    component: () => <KirkpatrickSeidel />
})