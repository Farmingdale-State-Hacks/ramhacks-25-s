import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  )
}
