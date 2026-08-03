import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/hosting-offer')({
  beforeLoad: () => {
    throw redirect({
      to: '/offer',
    })
  },
  component: () => null,
})
