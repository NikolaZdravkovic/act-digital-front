import React from 'react'

const Experties = (props) => {
    const expertiesData = props.props.data.data.attributes.expertiesHP
    return (
        <div className="experties">
            <div className="experties-titleHp container">
                Experties
            </div>
            <div className="experties-blockHp">
                {expertiesData.map((item, index) => (
                    <div key={index} className="experties-blockHp__item">
                        <img className="experties-blockHp__item--img" src={`${item.image.data.attributes.url}`} alt="" />
                        <div className="experties-blockHp__item--title">
                            {item.title}
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Experties