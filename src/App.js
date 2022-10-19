


import { useState } from 'react';
import Button from './components/Button/Index';
import Input from './components/Input/Index';

import { Container, Content, Row } from "./Style";


const App = ()=> {
  const [currentNumber, setcurrentNumber] = useState('0');
  const [firstNumber, setfirstNumber] = useState('0');

  const handleAddNumber=(num)=>{
      setcurrentNumber(prev=>` ${prev==='0' ? '': prev} ${num}`)
  }

  const handleonClear=()=>{
    setcurrentNumber('0');
    firstNumber('0');
  }

  const handleSumNumber = ()=>{
    if(firstNumber === '0'){
      setfirstNumber(String(currentNumber));
      setcurrentNumber('0')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setcurrentNumber(String(sum))
    }
  }
  return (
    <Container>
      <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label='1' onClick={()=>handleAddNumber('1')}/>
        <Button label='2' onClick={()=>handleAddNumber('2')}/>
        <Button label='3' onClick={()=>handleAddNumber('3')}/>
        <Button label= '/' onClick={()=>handleAddNumber('/')}/>
      </Row>
      <Row>
      <Button label='4' onClick={()=>handleAddNumber('4')}/>
        <Button label='5' onClick={()=>handleAddNumber('5')}/>
        <Button label='6' onClick={()=>handleAddNumber('6')}/>
        <Button label= '+' onClick={handleSumNumber}/>
      </Row>
      <Row>
      <Button label='7' onClick={()=>handleAddNumber('7')}/>
        <Button label='8' onClick={()=>handleAddNumber('8')}/>
        <Button label='9' onClick={()=>handleAddNumber('9')}/>
        <Button label= '*' onClick={()=>handleAddNumber('*')}/>
      </Row>
      <Row>
        <Button label='0' onClick={()=>handleAddNumber('0')}/>
        <Button label='C' onClick={handleonClear}/>
        <Button label='=' onClick={()=>handleAddNumber('=')}/>
        <Button label= '-' onClick={()=>handleAddNumber('-')}/>
      </Row>
      
      </Content>
       
    </Container>
   
  );
}

export default App;
