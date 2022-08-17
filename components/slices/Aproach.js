import React from 'react'
import Image from 'next/image'
import create from '../../public/assets/aproach/create.png'
import build from '../../public/assets/aproach/build.png'
import scale from '../../public/assets/aproach/scale.png'


const Aproach = (props) => {
    const aproachData = props.props.data.data.attributes.aproachHP

    return (
        <div className="aproach">
            <div className="aproach-title">Aproach</div>
            <div className="aproach-wrapper">
                <div className="aproach-create">
                    <span className="aproach-divider"></span>
                    <div className="aproach-num">01</div>
                    <div className="aproach-body">
                        <div className="aproach-body--title">{aproachData[0].title}</div>
                        <div className="aproach-body--img">
                            <Image src={create} />
                        </div>
                    </div>
                    <div className="aproach-body--desc">
                        {aproachData[0].description}
                    </div>

                </div>
                <div className="aproach-build">
                    <span className="aproach-divider"></span>
                    <div className="aproach-num">02</div>
                    <div className="aproach-body">
                        <div className="aproach-body--title">{aproachData[1].title}</div>
                        <div className="aproach-body--img">
                            <Image src={build} />
                        </div>
                    </div>
                    <div className="aproach-body--desc">
                        {aproachData[1].description}

                    </div>

                </div>
                <div className="aproach-scale">
                    <span className="aproach-divider"></span>
                    <div className="aproach-num">03</div>
                    <div className="aproach-body">
                        <div className="aproach-body--title">{aproachData[2].title}</div>
                        <div className="aproach-body--img">
                            <Image src={scale} />
                        </div>
                    </div>
                    <div className="aproach-body--desc">
                        {aproachData[2].description}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Aproach