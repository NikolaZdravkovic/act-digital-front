import React from 'react'
import Image from 'next/image'
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


const Header = ({ level, text }) => {
  if (level === 2) { return <h2>{text}</h2> }
  if (level === 3) { return <h3>{text}</h3> }
}

const Paragraph = ({ text }) => { return <p>{text}</p> }

const Quote = ({ text }) => { return <h4>"{text}"</h4> }

const ImageBlock = ({ src, strech }) => {

  return <div className="text-image--src"> <Image src={src} layout="fill"
    objectFit="cover" /> </div>
}
const Embed = ({ src }) => {
  return <div className="text-embed--src">
    <iframe src={`${src}`}
      height="100%"
      width="100%"
      title='video'
    />
  </div>

}



const TextBlock = ({ props }) => {
  const data = props
  console.log(data)
  return (
    <div className="text-wrapper">
      {data.map((item, index) => {
        if (item.type === "header") {
          return <div key={index} className="text-header">
            <Header level={item.data.level} text={item.data.text} />
          </div>
        }
        if (item.type === "paragraph") {
          return <div key={index} className="text-paragraph">
            <Paragraph text={item.data.text} />
          </div>
        }
        if (item.type === "quote") {
          return <div key={index} className="text-quote">
            <Quote text={item.data.text} />
          </div>
        }
        if (item.type === "image") {
          return <div key={index} className={item.data.stretched ? "text-image__streched" : "text-image"} >
            <ImageBlock src={item.data.file.url} />
          </div>
        }
        if (item.type === "embed") {
          return <div key={index} className="text-embed">
            <Embed src={item.data.embed} />
          </div>
        }
        if (item.type === "imageGallery") {
          let images=[]
          item.data.urls.forEach(function(url) {
            let obj = {original:`${url}`,thumbnail:`${url}`}
            images.push(obj)
        });
        
          return <div key={index} className="text-imageGallery">
            <ImageGallery showFullscreenButton={false} showPlayButton={false} items={images} />
          </div>
        }
      })}
    </div>
  )
}

export default TextBlock