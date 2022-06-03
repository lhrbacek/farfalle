import { AppShell, Center, Footer, Navbar } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { HeaderTabs } from "../Header/HeaderTabs"
import HomeCard from "../HomeCard/HomeCard"

function Layout(props: { auth: boolean }) {
  return (
    <AppShell
      header={<HeaderTabs auth={props.auth} />}
      footer={<Footer height={60} p="md">{<Center>©Farfalle Team</Center>}</Footer>}
    >
      <Outlet />
    </AppShell>
  )
}

export default Layout
