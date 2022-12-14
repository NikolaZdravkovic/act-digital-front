import { API_URL } from '../config/index'
import Hero from "../components/shared/Hero"
import IndustrieCategories from "../components/slices/IndustrieCategories"
import CaseStudiesBlock from "../components/shared/CaseStudiesBlock"
import NewsBlock from "../components/shared/NewsBlock"
import Clients from "../components/shared/Clients"
import ContactBlock from "../components/global/ContactBlock"

export default function IndustriesPage(props) {
    const { url } = props.data.data.attributes.hero.image.data.attributes
    console.log(props)
    return (


        <div className="industries-container">
            <div className="banner">
                <Hero props={props} />
            </div>
            <IndustrieCategories props={props} />
            <div className="case-studiesBlock">
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
    console.log(data)

    return {
        props: { data },
    }
}
