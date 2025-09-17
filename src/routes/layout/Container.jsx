export const Container = ({children,className}) =>{

    return (
        <div className={ 
        `${className} relative bg-gradient-to-br flex items-center text-center justify-between px-4 lg:px-8 py-12 `}
        >
        {children}
        </div>

    )
}