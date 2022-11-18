import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import ImageGallery from 'react-image-gallery';
import { parseUrl } from 'next/dist/shared/lib/router/utils/parse-url';

const Embed =({src})=>{
    var parser = new DOMParser();
    var doc = parser.parseFromString(src, 'text/html');
    console.log(doc.body.firstChild)
    return <div>
        
    </div>
}
const ContentBlock = ({ props }) => {
    console.log(props.content)
    let data = props.content
    return (
        <div>
            {data.map((item, i) => {
                if (item.__component === "shared.text") {
                    return <div key={i} className="text-item">
                        <ReactMarkdown >
                            {item.text}
                        </ReactMarkdown>
                    </div>
                }
                if (item.__component === "shared.image") {
                    return <div key={i} className="text-item">
                        <div className="text-image">
                            <img src={item.image.data.attributes.url} alt="" />
                        </div>
                    </div>
                }
                if (item.__component === "shared.image-carousel") {
                    let images = []
                    item.imageCarousel.data.forEach(function (url) {
                        let obj = { original: `${url.attributes.url}`, thumbnail: `${url.attributes.url}` }
                        images.push(obj)
                    });
                    return <div key={i} className="text-item">
                        <div className="text-carousel">
                            <ImageGallery showFullscreenButton={false} showPlayButton={false} items={images} />
                        </div>
                    </div>
                }
                if (item.__component === "shared.video") {
                    return <div key={i} className="text-item">
                        <div className="text-video--src">
                            <video width="100%" controls>
                                <source src={item.video.data.attributes.url} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                }
                if (item.__component === "shared.embed") {
                    return <div key={i} className="text-item">
                         <div className="text-embed--src" dangerouslySetInnerHTML={{ __html: item?.link }} />
                    </div>
                }
            })}
        </div>
    )
}

export default ContentBlock