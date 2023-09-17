import '../navbar/style.css'

const Navbar = ()=>{

    return (
        <ul className="ul" style={{
            listStyle: 'none', 
            display: 'flex', 
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            height: 40,
            padding: 0,
            margin: 0,
            }}>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Contacto</li>
        </ul>
    )

}

export default Navbar