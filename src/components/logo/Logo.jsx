export const Logo = ({fontSize = '20px'}) => {
    return (

        <>
            {/* Logo */}
            <div className="flex flex-col items-center gap-1"> {/* Cambiado a flex-col y gap-1 */}
                <img src="/img/bunnylogo1.png" alt="Bunny Logo" className="h-15 " />
                <p className="font-bold text-gray-800" style={{ fontSize: fontSize }}>Creations world</p>
            </div></>
    )
}