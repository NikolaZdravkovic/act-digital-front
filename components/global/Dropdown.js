import {React ,useState} from 'react'
import Link from 'next/link'



const Dropdown = ({submenus}) => {
// console.log(submenus.dropdownLinks)
// console.log(submenus[2].dropdownLinks);
// const [dropdown, setDropdown] = useState(false);
// console.log(submenus[0].subLink)
const dropMenu = submenus[0].subLink
  return (
    <ul
    className ="nav-dropdown__content"
    // onClick={() => setDropdown(!dropdown)}
  >
    {dropMenu.map((item) => {
      return (
        <li key={item.id}>
          <Link
            href={item.href}
            // className={item.cName}
            // onClick={() => setDropdown(false)}
          >
            {item.label}
          </Link>
        </li>
      );
    })}
  </ul>
  )
}

export default Dropdown