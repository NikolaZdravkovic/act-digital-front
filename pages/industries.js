import { API_URL } from '../config/index'
import Hero from "../components/shared/Hero"
import IndustrieCategories from "../components/slices/IndustrieCategories"
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

export default function IndustriesPage(props) {
    const { url } = props.data.data.attributes.hero.image.data.attributes
    // console.log(url)

    return (


        <div className="industries-container">
            <Hero props={props} />
            <IndustrieCategories props={props} />
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
    const res = await fetch(`${API_URL}/api/industries-page?populate=deep`)
    const data = await res.json()

    return {
        props: { data },
    }
}
