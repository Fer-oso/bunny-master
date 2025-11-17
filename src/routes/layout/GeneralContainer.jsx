

export const GeneralContainer = ({ children, className }) => {
    return (
        <div className={`m-auto
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl
        mx-auto px-2 sm:px-6 
        lg:px-0
        ${className}`}>
            {children}
        </div>
       
    )
}