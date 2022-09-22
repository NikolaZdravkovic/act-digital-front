import React from 'react'
import Image from "next/image"


const Hero = ({ props }) => {
    const data = props.data.data.attributes;
    const { url } = props.data.data.attributes.hero.image.data.attributes
    const format = props.data.data.attributes.hero.image.data.attributes.ext

    if (format === ".mp4") {
        return (
            <>
                <div className="banner-video">
                    <video
                        loop
                        muted
                        autoPlay
                    >
                        <source src={url} />
                    </video>

                </div>
                <div className="banner-wrapper container">
                    <div className="banner-category">
                        <p>{data.hero.category}</p>
                    </div>
                    <div className='banner-title'>
                        <h1>{data.hero.title}</h1>
                    </div>
                    <div className={data.hero.title === null ? "banner-description" : "banner-desc"} >
                        <p>{data.hero.description}</p>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="banner-image">
                    <Image
                        priority
                        layout="fill"
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
                    <div className={data.hero.title === null ? "banner-description" : "banner-desc"} >
                        <p>{data.hero.description}</p>
                    </div>
                </div>
            </>
        )
    }


}

export default Hero