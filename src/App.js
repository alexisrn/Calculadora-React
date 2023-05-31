import {Button} from './components/button'
import {Input} from './components/input'

import * as S  from './styles'
import {useState} from 'react';




export const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
      setCurrentNumber('0');
      setFirstNumber('0');
      setOperation('')
  };



  const handleAddNumber = (num) => {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleSumNumbers =  () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }

  };


  const handleMinusNumbers =  () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }

  };


  const handleMultiNumbers =  () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }

  };

  
  const handleDivisorNumbers =  () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }

  };

  // Função de igual
  const handleEquals =  () => {

    if (!firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
          case '-':
            handleMinusNumbers();
            break;
            case '*':
              handleMultiNumbers();
              break;
              case '/':
                handleDivisorNumbers();
                break;
            default: break;
      }
    }

  };

  return (
    <S.Container>
        <S.Content>
            <Input value={currentNumber} />
            <S.Row>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="C" onClick={() => handleOnClear()}/>
            <Button label="/" onClick={handleDivisorNumbers}/>
            <Button label="X" onClick={handleMultiNumbers}/>
            </S.Row>
            <S.Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="-" onClick={handleMinusNumbers}/>
            </S.Row>
            <S.Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="+" onClick={handleSumNumbers}/>
            </S.Row>
            <S.Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={handleEquals}/>
            </S.Row>
        </S.Content>
    </S.Container>
  );
}


