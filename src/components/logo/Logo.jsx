export const Logo = ({ height = '30px' }) => {
    return (
        <div className="flex flex-col items-center gap-1"> {/* Cambiado a flex-col y gap-1 */}
            <img src="/img/bunnylogo.png" alt="Bunny Logo" className="-mt-2 -ml-1" style={{ height: height }} />
        </div>
    )
}