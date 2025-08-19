export const GeneralContainer = ({ children, styles }) => {
    return (
        <div className="relative
        bg-gradient-to-br
        mx-auto
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl mt-17"    styles={styles}>
            {children}
        </div>
    )
}