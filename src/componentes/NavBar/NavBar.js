import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'

const category = [
    'Kits',
    'Palos',
    'Bolsas',
    'Pelotas',
    'Indumentaria',
]

const NavBar = () => {
    return (
        <nav className="flex justify-between p-4 border-b items-center">
            <h1 className="font-bold">Golf Supplies</h1>
            <CartWidget/>
            <ul className="flex">
                
                {category.map(value => (
                    <li className="p-1"> <NavLink to='/category/:${value}' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>{value}</NavLink></li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar