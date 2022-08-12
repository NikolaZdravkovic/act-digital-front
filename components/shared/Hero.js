import React from 'react'

const Hero = ({ props }) => {
    const data = props.data.data.attributes;

    if (data.hero.category || data.hero.description === null) {
        return (
            <div className="banner-wrapper container">
                <div>
                    <p>{data.hero.category}</p>
                </div>
                <div>
                    <h1>{data.hero.title}</h1>
                </div>
                <div>
                    <p>{data.hero.description}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="banner-wrapper container">
                <div>
                    <h1>{data.hero.title}</h1>
                </div>
            </div>
        )
    }

}

export default Hero