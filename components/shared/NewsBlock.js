import React from 'react'
import triangle_right from '../../public/assets/triangle_right.png'

const NewsBlock = ({ props }) => {
    // let data;
    // console.log(props)
    // let res = Object.values(props.news.data).some((val) => Array.isArray(val));
    // if (res === true) {
    //     data = props.data.data[0].attributes.news
    // } else {
    //      data = props.data?.data.attributes.news;
    // }
    console.log(props)
    const data = props?.news.data

    return (
        <>
            { data === undefined ? <div></div> : 
                <div className="news">
                    <div className="news-frame">
                        <div className="news-title">
                            {/* {res ===true ? 'Related' : 'Insights & News'}  */}
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
                                    {item?.attributes.news.data?.attributes.title}
                                </div>
                                <div className="news-block--img">
                                    <img src={`${item.attributes.image.data?.attributes.url}`} alt="" />
                                </div>
                                <div className="news-block--title">
                                    {item.attributes.title}
                                </div>
                                <div className="news-block--desc">
                                    {item.attributes.description}
                                </div>
                                <div className="news-block--date">
                                    {/* {item.date} */}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            }
        </>
    )
}

export default NewsBlock