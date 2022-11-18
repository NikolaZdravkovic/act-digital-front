import React from 'react'
import { API_URL } from '../../config/index'
import Image from 'next/image'
import case_studies_hero from '../../public/assets/caseStudiesPageHero.png'
import CaseStudieItem from '../../components/slices/CaseStudieItem'
import ContactBlock from "../../components/global/ContactBlock"



const CaseStudiesPage = (props) => {
    const data = props.data.data
    return (
        <div className="case-studies__container">
            <div className="studie-banner">
                <div className="studie-image">
                    <Image priority
                        layout="fill"
                        objectFit="cover" src={case_studies_hero.src} />
                </div>
                <div className="studie-banner--block container">
                    <div className="studie-category">category</div>
                    <div className="studie-title">Case studies </div>
                    <div className="studie-description">In et urna sit consectetur diam, sed eros, duis tincidunt. Magna tincidunt facilisis</div>
                </div>
            </div>

            <div className="case-studies__content">
                <div className="case-studies__wrapper">
                    {data.map((item, index) => (
                        <CaseStudieItem key={index} props={item} />
                    ))}
                </div>
            </div>
            {/* <div className="contactBlock">
                <ContactBlock props={props} />
            </div> */}
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/api/case-studies?populate=deep`)
    const data = await res.json()

    return {
        props: { data },
    }
}
export default CaseStudiesPage