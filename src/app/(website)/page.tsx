import React from 'react'
import HomeHero from './_Components/HomeHero'
import { SignatureExperiences } from './_Components/Experiences'
import { WeServe } from './_Components/WeServe'
import { MembershipSection } from './_Components/MembershipSection'
import StartPlanning from './_Components/StartPlanning'

function Page() {
  return (
    <div>
      <section id="home">
        <HomeHero />
      </section>

      <section id="experiences">
        <SignatureExperiences />
      </section>

      <section id="destinations">
        <WeServe />
      </section>

      <section id="membership">
        <MembershipSection />
      </section>

      <section id="start-planning">
        <StartPlanning />
      </section>
    </div>
  )
}

export default Page
