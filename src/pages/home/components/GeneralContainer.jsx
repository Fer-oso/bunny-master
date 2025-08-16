export const GeneralContainer = ({ children, styles }) => {
    return (
        <div className="relative
        bg-gradient-to-br
        py-10
        xl:py-20
        px-4
        sm:px-6
        lg:px-8
        mx-auto
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl "    styles={styles}>
            {children}
        </div>
    )
}