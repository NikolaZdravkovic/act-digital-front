import Link from 'next/link'
import useSWR from 'swr';
import Dropdown from './Dropdown.js'
import logo from '../../public/logo.png'
import Image from "next/image";
import en from '../../locales/en';
import fr from '../../locales/en';
import pt from '../../locales/pt';
import { useRouter } from 'next/router';
import { API_URL } from '../../config/index'
import { useState } from 'react';
import arrow from '../../public/assets/TriangleDown.png'


async function fetcher(url) {
    const res = await fetch(url);
    return res.json();

}

const Nav = () => {
    const url = `${API_URL}/api/navigation?populate=deep`;
    const { data, error } = useSWR(url, fetcher);
    const router = useRouter();
    const { locale, locales, asPath } = router;
    const [isActive, setIsActive] = useState(false);


    let lang;
    if (locale === 'en') {
        lang = en;
    }
    if (locale === 'fr') {
        lang = fr;
    }
    if (locale === 'pt') {
        lang = pt
    }

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    const navItems = data.data.attributes.body;
    const langItems = data.data.attributes.language;
    const subLink = navItems[0].subLink;
    // console.log(subLink)
    const toggleCheck = () => {
        document.getElementById("burger-checkbox").checked = false;
    }

    return (
        <>
            <div className="nav">
                <div className='nav-wrapper container'>
                    <div className="nav-logo">
                        <Link href={'/'}>
                                <Image
                                    src={logo}
                                    layout="fill" objectFit="cover"
                                />
                        </Link>
                    </div>

                    {/* <div className="nav-burger"></div> */}
                    <header className="nav-burger">
                        <input type="checkbox" id="burger-checkbox" />
                        <label htmlFor="burger-checkbox">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <div className="nav-menu">
                            <nav>
                                <div onClick={toggleCheck} className="nav-logo">

                                    <Link href={'/'}>
                                            <Image
                                                src={logo}
                                                layout="fill" objectFit="cover"
                                            />
                                    </Link>
                                </div>
                                <ul>
                                    {navItems.map((item) => {
                                        if (item.label === "Industries") {
                                            return (
                                                <>
                                                    <div
                                                        className="nav-accordion">
                                                        <li
                                                            onClick={toggleCheck}
                                                            key={item.id}
                                                            className="nav-links__item"
                                                        >
                                                            <Link href={item.href}>{item.label}</Link>

                                                        </li>
                                                        <div className="nav-accordion__arrow" onClick={() => setIsActive(!isActive)} >{isActive ? <div className="nav-accordion__arrow--down"></div> : <div className="nav-accordion__arrow--right"></div>}</div>

                                                        {/* <Dropdown submenus={navItems} /> */}

                                                    </ div>
                                                    <div key={item} className="nav-accordion__item">
                                                        {isActive && <div className="nav-accordion__content">
                                                            {subLink.map((item, index) => {
                                                                return (
                                                                    <div key={index} className="nav-accordion__content--link">
                                                                        {item.label}
                                                                    </div>
                                                                )

                                                            })}
                                                        </div>}
                                                    </div>
                                                </>

                                            );
                                        }

                                        return (
                                            <li onClick={toggleCheck} key={item.id} className="nav-links__item">
                                                <Link href={item.href}>{item.label}</Link>
                                            </li>
                                        );
                                    })}

                                </ul>
                            </nav>
                        </div>
                    </header>
                    <div className="nav-links">
                        <ul className="nav-links__items">
                            {navItems.map((item) => {
                                if (item.label === "Industries") {
                                    return (
                                        <div className="nav-links__item nav-dropdown">
                                            <li
                                                key={item.id}
                                            >
                                                <Link href={item.href}>{item.label}</Link>
                                            </li>
                                            <Dropdown submenus={navItems} />
                                        </div>
                                    );
                                }
                                return (
                                    <li key={item.id} className="nav-links__item">
                                        <Link href={item.href}>{item.label}</Link>
                                    </li>
                                );
                            })}
                            <div className="nav-divider"></div>
                            <div className="nav-links__languages">
                                {locales.map((l, i) => {

                                    return (
                                        <span key={i} className="nav-links__item">
                                            <Link href={asPath} locale={l}>
                                                {l}
                                            </Link>
                                        </span>
                                    );
                                })}

                            </div>

                        </ul>
                        {/* <Dropdown submenus={navItems} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav