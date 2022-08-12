import Link from 'next/link'
import useSWR from 'swr';
import Dropdown from './Dropdown.js'
import logo from '../../public/logo.png'
import Image from "next/image";

async function fetcher(url) {
    const res = await fetch(url);
    return res.json();

}

const Nav = () => {
    const url = 'http://localhost:1337/api/navigation?populate=deep';
    const { data, error } = useSWR(url, fetcher);

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
                        <Image
                            src={logo}
                            layout="fill" objectFit="cover"
                        />
                    </div>

                    <div className="nav-burger"></div>

                    <div className="nav-links">
                        <ul className="nav-links__items">
                            {navItems.map((item) => {
                                if (item.label === "Industries") {
                                    // console.log('radi')
                                    return (
                                        <li
                                            key={item.id}
                                            className="nav-links__item dropdown"
                                        >
                                            <Link href={"item.path"}>{item.label}</Link>
                                        </li>
                                    );
                                }
                                return (
                                    <li key={item.id} className="nav-links__item">
                                        <Link href={item.href}>{item.label}</Link>
                                    </li>
                                );
                            })}
                            <div className="nav-links__languages">
                                {langItems.map((item) => {
                                    return (
                                        <li key={item.id} className="nav-links__item">
                                            <Link href={item.href}>{item.label}</Link>
                                        </li>
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