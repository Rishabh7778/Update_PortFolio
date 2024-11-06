import {Hero } from "./HomeComponents/Hero"
import {MyAbout } from "./HomeComponents/MyAbout";
import {Projects } from "./HomeComponents/Projects"
import { Skills } from "./HomeComponents/Skills";
import {Certificates } from "./HomeComponents/Certificates"

export const Home = () => {
  return (
    <main>
        <Hero/>
        <MyAbout/>
        <Projects/>
        <Certificates/>
        <Skills/>
    </main>
  )
}