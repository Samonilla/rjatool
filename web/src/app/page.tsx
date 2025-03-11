import Image from "next/image";
import Head from 'next/head'
import Header from "@/components/Header"
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import ProjectGoals from '@/components/ProjectGoals'
import Progress from '@/components/Progress'
import Demo from '@/components/Demo'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Head>
        <title>RJA Tool Project</title>
        <meta name="description" content="Racial Justice Act Tool for identifying potential RJA claims" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <ProjectGoals />
      <Progress />
      <Demo />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
