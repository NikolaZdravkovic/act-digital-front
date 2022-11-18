import React from 'react'
import { API_URL } from '../config/index'
import Hero from '../components/shared/Hero'
import TextBlock from '../components/shared/TextBlock'
import GrowthData from '../components/shared/GrowthData'
import AboutCards from '../components/slices/AboutCards'
import ContactBlock from '../components/global/ContactBlock'
import Image from 'next/image'


const About = (props) => {
    const textBlock = props.data.data.attributes.text;
    const image = props.data.data.attributes.image.image.data.attributes.url
    const text_1 = textBlock[0].text;
    const text_2 = textBlock[1].text;

    return (
        <>
            <div className="about-container">
                <div className="banner">
                    <Hero props={props} />
                </div>
                <div className="text">
                    <TextBlock props={text_1} />
                </div>
                < GrowthData />
                <div className="cards-container container">
                    <AboutCards />
                </div>
                <div className="text">
                    <TextBlock props={text_2} />
                </div>
                <div className="about-image">
                  <img src={image} alt="" />
                </div>
                <div className="contactBlock">
                    <ContactBlock props={props} />
                </div>
            </div>


        </>
    )
}
// This gets called on every request
export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/api/about-page?populate=deep`)
    const data = await res.json()

    return {
        props: { data },
    }
}


export default About