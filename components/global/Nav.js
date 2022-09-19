import Link from 'next/link'
import useSWR, { SWRConfig } from 'swr';
import Dropdown from './Dropdown.js'
import logo from '../../public/logo.png'
import Image from "next/image";
import en from '../../locales/en';
import fr from '../../locales/en';
import pt from '../../locales/pt';
import { useRouter } from 'next/router';
import { API_URL } from '../../config/index'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Nav({ fallback }) {
    return (
        <SWRConfig value={{ fallback }}>
            {getData()}
        </SWRConfig>
    )
}
export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/navigation?populate=deep`)
    const navData = await res.json();

    return {
        props: {
            fallback: { "/api/navigation?populate=deep": navData }
        }
    }
}
function getData() {
    const {data,error}=useSWR(`${API_URL}/api/navigation?populate=deep`,fetcher)

    if (error) return <div>Error fetching data</div>
    if (!data) return <div>Loading</div>
    const navItems = data.data.attributes.body;

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
