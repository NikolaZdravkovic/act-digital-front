import Hero from "../components/shared/Hero"
import Anchor from "../components/slices/Anchor"
import TextBlock from "../components/shared/TextBlock"
import GrowthData from "../components/shared/GrowthData"
import Industries from "../components/slices/Industries"
import Aproach from "../components/slices/Aproach"
import Experties from "../components/slices/Experties"
import CaseStudiesBlock from "../components/shared/CaseStudiesBlock"
import NewsBlock from "../components/shared/NewsBlock"
import Clients from "../components/shared/Clients"
import ContactBlock from "../components/global/ContactBlock"
import Image from "next/image"

export default function Home(props) {
  const { url } = props.data.data.attributes.hero.image.data.attributes
  const { textBlock } = props.data.data.attributes;
  const textBlock_1 = textBlock[0];
  // const textBlock_2 =textBlock[1];

  return (


    <div className="homepage-container">
      <div style={{ backgroundImage: `url(${url})` }} className="banner">
        <Hero props={props} />
        <div className="banner-anchors">
          <Anchor props={props} />
        </div>
      </div>

      <div className="text-block">
        <div className="text-block-background"></div>
        <div className="text-block-title">
          <TextBlock props={textBlock_1} />
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
        <ContactBlock props ={props}/>
      </div>
    </div>
  )
}
// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/api/homepage?populate=deep`)
  const data = await res.json()

  return { props: { data } }
}
