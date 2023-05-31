
import * as S from './styles.js'

export const Button = ({label, onClick}) => {
  return (
    <S.ButtonContainer onClick={onClick}>
     {label}
    </S.ButtonContainer>
  );
}


