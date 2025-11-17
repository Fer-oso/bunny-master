export const Container = ({children,className,id}) =>{

    return (
        <div className={ 
        `${className} relative bg-gradient-to-br flex items-center text-center justify-between`}
        id={id}
        >
        {children}
        </div>

    )
}