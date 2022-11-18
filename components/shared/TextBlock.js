import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const TextBlock = ({ props }) => {

  return (
    <ReactMarkdown >
        {props}
    </ReactMarkdown>
  )
}

export default TextBlock