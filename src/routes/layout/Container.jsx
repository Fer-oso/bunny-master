export const Container = ({children,className,id}) =>{

    return (
        <div className={ 
        `${className} flex items-center justify-center `}
        id={id}
        >
        {children}
        </div>

    )
}