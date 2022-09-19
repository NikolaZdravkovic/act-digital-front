import en from '../locales/en';
import fr from '../locales/fr';
import pt from '../locales/pt';
import { API_URL } from '../config/index'
import { useRouter } from 'next/router';
import Hero from "../components/shared/Hero"
import Anchor from "../components/slices/Anchor"
import GrowthData from "../components/shared/GrowthData"
import Industries from "../components/slices/Industries"
import Aproach from "../components/slices/Aproach"
import Experties from "../components/slices/Experties"
import CaseStudiesBlock from "../components/shared/CaseStudiesBlock"
import NewsBlock from "../components/shared/NewsBlock"
import Clients from "../components/shared/Clients"
import ContactBlock from "../components/global/ContactBlock"

export default function Home(props) {
  const router = useRouter();
  const { locale } = router;
  let lang;
  if (locale === 'en') {
    lang = en
  }
  if (locale === 'fr') {
    lang = fr
  }
  if (locale === 'pt') {
    lang = pt
  }


  // console.log(locale, router)
  return (

    <div className="homepage-container">
      <Hero props={props} />
      <div className="banner-anchors">
        <Anchor props={props} />
      </div>

      <div className="text-block">
        <div className="text-block-background"></div>
        <div className="text-block-title">
          {/* <TextBlock props={textBlock_1} /> */}
          <h4>{lang.hpText}</h4>
        </div>
      </div>
      < GrowthData />
      <div className="industries container">
        <Industries props={props} />
      </div>
      <div className="aproach container">
        <Aproach props={props} />
      </div>
      <div className="experties">
        <Experties props={props} />
      </div>
      <div className="case-studies">
        <CaseStudiesBlock props={props} />
      </div>
      <div className="news container">
        <NewsBlock props={props} />
      </div>
      <div className="clients container">
        <Clients props={props} />
      </div>
      <div className="contactBlock">
        <ContactBlock props={props} />
      </div>

    </div>
  )
}
// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/homepage?populate=deep`)
  const data = await res.json()

  return { props: { data } }
}
