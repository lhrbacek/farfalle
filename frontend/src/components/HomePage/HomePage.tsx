import { performances } from "../../data/performances"
import { HeaderTabs } from "../Header/HeaderTabs"
import ProgramCard from "../ProgramCard/ProgramCard"
import { PerformanceProps } from "../types/performance"

function HomePage() {
  const header = {
    user: { name: "Joe Doe", image: "src/data/avatar.jpg"},
    tabs: [ "Home", "Program", "About us", "Cart" ],
  }

  return (
    <div>
      <HeaderTabs {...header}/>
      <ProgramCard values={performances} />
    </div>
  )
}

export default HomePage
