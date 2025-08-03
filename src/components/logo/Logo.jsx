export const Logo = ({height = '30px'}) => {
    return (
        <>
            {/* Logo */}
            <div className="flex flex-col items-center gap-1"> {/* Cambiado a flex-col y gap-1 */}
                <img src="/img/bunnylogo3.svg" alt="Bunny Logo" className="-mt-2 -ml-1" style={{ height: height }}/>
{       /*         <p className="font-bold text-gray-800 -mt-1" style={{ fontSize: fontSize }}>Creations world</p>
*/}            </div></>
    )
}