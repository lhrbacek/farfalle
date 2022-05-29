import { AppShell, Center, Footer } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { HeaderTabs } from "../Header/HeaderTabs"

function HomePage() {
  return (
    <AppShell
      header={<HeaderTabs />}
      footer={<Footer height={60} p="md">{<Center>©Farfalle Team</Center>}</Footer>}
    >
      <Outlet />
    </AppShell>
  )
}

export default HomePage
