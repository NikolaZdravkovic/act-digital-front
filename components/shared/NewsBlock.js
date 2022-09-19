import React from 'react'
import triangle_right from '../../public/assets/triangle_right.png'

const NewsBlock = ({ props }) => {
    const data = props.data.data.attributes.newsBlock;
    return (
        <div className="news">
            <div className="news-frame">
                <div className="news-title">
                    Insights & News
                </div>
                <div className="news-seeAll">
                    <div>See all</div>
                    <img src={`${triangle_right.src}`} alt="" />
                </div>
            </div>
            <div className="news-wrapper">
                {data.map((item, index) => (
                    <div key={index} className="news-block">
                        <div className="news-block--category">
                            {item.category}
                        </div>
                        <div className="news-block--img">
                            <img src={`${item.image.data.attributes.url}`} alt="" />
                        </div>
                        <div className="news-block--title">
                            {item.title}
                        </div>
                        <div className="news-block--desc">
                            {item.description}
                        </div>
                        <div className="news-block--date">
                            {item.date}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default NewsBlock