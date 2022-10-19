import { ButtonContainer } from "./Style";

const Button =({label, onClick})=>{

    return(
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    )

}
export default Button;