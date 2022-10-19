
import { InputContainer, input } from "./Style";


const Input = ({value})=>{
    return(
        <InputContainer>
             <input disabled  value={value}/>
        </InputContainer>
       
       
    )



}
export default Input;