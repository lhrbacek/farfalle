import { AppShell, Center, Footer } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { HeaderTabs } from "../Header/HeaderTabs"

function HomePage(props: {auth: boolean}) {
  return (
    <AppShell
      header={<HeaderTabs auth={props.auth}/>}
      footer={<Footer height={60} p="md">{<Center>©Farfalle Team</Center>}</Footer>}
    >
      <Outlet />
    </AppShell>
  )
}

export default HomePage
