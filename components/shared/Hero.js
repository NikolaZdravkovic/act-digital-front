import React from 'react'
import Image from "next/image"


const Hero = ({ props }) => {
    const data = props.data.data.attributes;
    const { url } = props.data.data.attributes.hero.image.data.attributes

    return (
        <div className="banner">
            <div className="banner-image">
                <Image width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    src={url} />

            </div>
            <div className="banner-wrapper container">
                <div className="banner-category">
                    <p>{data.hero.category}</p>
                </div>
                <div className='banner-title'>
                    <h1>{data.hero.title}</h1>
                </div>
                <div className="banner-description">
                    <p>{data.hero.description}</p>
                </div>
            </div>
        </div>

    )

}

export default Hero