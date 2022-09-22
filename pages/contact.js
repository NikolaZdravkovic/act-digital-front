import React from 'react'
import Hero from "../components/shared/Hero"
import { API_URL } from '../config/index'


const Contact = (props) => {
    return (
        <div className="contact">
            <div className="banner">
                <Hero props={props} />
            </div>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/api/contact-page?populate=deep`)
    const data = await res.json()

    return {
        props: { data },
    }
}



export default Contact