import React from 'react'
import { Router, useRouter } from 'next/router'
import { API_URL } from '../../config/index'
import TextBlock from '../../components/shared/TextBlock'
import NewsBlock from "../../components/shared/NewsBlock"
import ContactBlock from "../../components/global/ContactBlock"



import Image from 'next/image'
const CaseStudie = (props) => {
    const router = useRouter();
    const slug = router.query.slug
    const data = props.data.data[0].attributes;
    const text_1 = data.textBlock[0].content;
    let res = Object.values(props.data).some((val) => Array.isArray(val));
    console.log(res);

    console.log(props)

    return (
        <div className="studie-container">
            <div className="studie-banner">
                <div className="studie-image">
                    <Image priority
                        layout="fill"
                        objectFit="cover" src={data.image.data.attributes.url} />
                </div>
                <div className="studie-banner--block container">
                    <div className="studie-category">{data.category}</div>
                    <div className="studie-title">{data.title}</div>
                    <div className="studie-description">{data.description}</div>
                </div>
            </div>
            <div className="studie-content">
                <div className="text">
                    <TextBlock props={text_1} />
                </div>
                <div className="news container">
                    <NewsBlock props={props} />
                </div>
                <div className="contactBlock">
                    <ContactBlock props={props} />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const { slug } = params;
    // console.log(slug)
    const res = await fetch(`${API_URL}/api/case-studies?filters[slug][$eq]=${slug}&populate=deep`)
    const data = await res.json()
    // const { data } = caseStudies;
    // console.log(data.data)

    return {
        props: { data },
    }
}

export default CaseStudie