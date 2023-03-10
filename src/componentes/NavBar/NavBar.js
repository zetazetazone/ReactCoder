const articulos = [
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
            <ul className="flex">
                {articulos.map(value => (
                    <li className="p-1"><button>{value}</button></li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar