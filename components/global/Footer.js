import React from 'react'
import useSWR from 'swr';
import logo from '../../public/logo.png'
import Link from 'next/link'
import { API_URL } from '../../config/index'



async function fetcher(url) {
    const res = await fetch(url);
    return res.json();

}

const Footer = () => {
    const url = `${API_URL}/api/footer?populate=deep`;
    const { data, error } = useSWR(url, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    // console.log(data.data.attributes.body)
    const footerData = data.data.attributes.body;
    const industries = footerData[0].FooterLink;
    const services = footerData[1].FooterLink;
    const insight = footerData[2].FooterLink;
    const about = footerData[3].FooterLink;
    const followUs = footerData[4].FooterLink;
    const copyRights = footerData[5].FooterLink;




    return (
        <div className="footer">
            <div className="footer-wrapper container">
                <div className="footer-block">
                    <div className="footer-item footer-item__logo">
                        <img src={`${logo.src}`} alt="" />
                    </div>

                    <div className="footer-item footer-item__industries">
                        <div className="footer-item--title">
                            {footerData[0].label}
                        </div>
                        <div className="footer-item--links">
                            {industries.map((item, index) => (
                                <Link key={index} className="footer-item--link" href={item.href}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer-item footer-item__services">
                        <div className="footer-item--title">
                            {footerData[1].label}
                        </div>
                        <div className="footer-item--links">
                            {services.map((item, index) => (
                                <Link key={index} className="footer-item--link" href={item.href}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer-item footer-item__insights">
                        <div className="footer-item--title">
                            {footerData[2].label}
                        </div>
                        <div className="footer-item--links">
                            {insight.map((item, index) => (
                                <Link key={index} className="footer-item--link" href={item.href}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer-item footer-item__about">
                        <div className="footer-item--title">
                            {footerData[3].label}
                        </div>
                        <div className="footer-item--links">
                            {about.map((item, index) => (
                                <Link key={index} className="footer-item--link" href={item.href}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer-item footer-item__follow">
                        <div className="footer-item--title">
                            {footerData[4].label}
                        </div>
                        <div className="footer-item--links">
                            {followUs.map((item, index) => (
                                <Link key={index} className="footer-item--link" href={item.href}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer-item footer-item__copyRights">
                    
                        <div className="footer-item--links">
                            {copyRights.map((item, index) => (
                                <div key={index} className="footer-item--link" href={item.href}>
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer