import React from 'react'
import { API_URL } from '../config/index'
import Hero from "../components/shared/Hero"
import ExpertiesBlock from '../components/slices/ExpertiesBlock'
import IndustrieCategories from "../components/slices/IndustrieCategories"
import CaseStudiesBlock from "../components/shared/CaseStudiesBlock"
import NewsBlock from "../components/shared/NewsBlock"
import Clients from "../components/shared/Clients"
import ContactBlock from "../components/global/ContactBlock"

const Experties = (props) => {
  const caseStudies = props.data.data.attributes.caseStudiesBlock
  const news = props.data.data.attributes.news
  console.log(news)

    return (
        <div className="experties-container">
            <div className="banner">
                <Hero props={props} />
            </div>

            <div className="experties">
                <ExpertiesBlock props={props} />
            </div>
            <div className="case-studiesBlock">
                <CaseStudiesBlock props={caseStudies} />
            </div>
            <div className="news container">
                <NewsBlock props={news} />
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
    const res = await fetch(`${API_URL}/api/experties-page?populate=deep`)
    const data = await res.json()

    return {
        props: { data },
    }
}


export default Experties