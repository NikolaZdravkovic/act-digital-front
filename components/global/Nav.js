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


async function fetcher(url) {
    const res = await fetch(url);
    return res.json();

}

const Nav = () => {
    const url = `${API_URL}/api/navigation?populate=deep`;
    const { data, error } = useSWR(url, fetcher);
    const router = useRouter();
    const { locale, locales, asPath } = router;

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
    // console.log(navItems, langItems)

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

                    <div className="nav-burger"></div>

                    <div className="nav-links">
                        <ul className="nav-links__items">
                            {navItems.map((item) => {
                                if (item.label === "Industries") {
                                    return (
                                        <li
                                            key={item.id}
                                            className="nav-links__item dropdown"
                                        >
                                            <Link href={item.href}>{item.label}</Link>
                                        </li>
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