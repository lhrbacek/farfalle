import { AppShell, Center, Footer } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { HeaderTabs } from "../Header/HeaderTabs"

function HomePage() {
  const header = {
    user: { name: "Joe Doe", image: "src/data/avatar.jpg"},
    tabs: [ "Home", "Program", "About us", "Cart" ],
  }

  return (
    <AppShell
      header={<HeaderTabs {...header}/>}
      footer={<Footer height={60} p="md">{<Center>©Farfalle Team</Center>}</Footer>}
    >
      <Outlet />
    </AppShell>
  )
}

export default HomePage
