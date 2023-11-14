import { Hero, About, Explore, GetStarted, WhatsNew, World, Insights, Feedback, } from "./sections"



export default function Home() {
  return (
    <>
      <Hero />

      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>

      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>

      <World />

      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
    </>
  )
}
