export const Logo = ({ height = '20px' }) => {
    return (
        <div className="flex flex-col items-center gap-1"> {/* Cambiado a flex-col y gap-1 */}
            <img src="/img/bunnylogo.png" alt="Bunny Logo"  style={{ height: height }} />
        </div>
    )
}