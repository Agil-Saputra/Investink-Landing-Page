// import all necessary modules
import { Outfit } from "next/font/google"
import Head from "next/head"
import { createClient } from "contentful"

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

// fetching data from Contentful CMS
export async function getStaticProps(type){

  // initializing the right identifier(spaceID, accessToken) for contenful with .env.local
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // make variables for each content-model to passing props
  const hero = await client.getEntries({content_type:"hero"})
  const features = await client.getEntries({content_type:"features"})
  const saving = await client.getEntries({content_type:"savings"})
  const contact = await client.getEntries({content_type:"contact"})

  // passing props for each content-model response
  return {
    props : {
    features: features.items,
    hero: hero.items,
    savings: saving.items,
    contacts: contact.items,
    }
    }
  }

  // import all necessary components
import Navbar from '@/components/header/navbar'
import Hero from "@/components/hero/hero"
import Features from "@/components/features/features"
import Savings from "@/components/savings/savings"
import Contact from "@/components/contact/contact"
import Subs from "@/components/subscribing/subs"
import Footer from "@/components/footer/footer"
import Copyright from "@/components/footer/copyright"


export default function Home({hero, features, savings, contacts}) {
  return (
    <>
      <Head>
      <title>Investink</title> 
        <meta name="description" content="Investink is the best invest platform in the planet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.svg"/>
      </Head>
      <main className={`${outfit.variable} font-sans`}>
    <Navbar/>
     <Hero data={hero}/>
     <Features data={features}/>
     <Savings data={savings}/>
     <Contact data={contacts}/>
     <Subs data={contacts}/>
     <Footer data={contacts}/>
     <Copyright/>
      </main>
      <></>
    </>
  )
}
