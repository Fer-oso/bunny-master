import { Container } from "./Container"

export const GeneralContainer = ({ children, className }) => {
    return (
        <Container className={`relative bg-gradient-to-br mt-17 ${className}`}>
            {children}
        </Container>
    )
}