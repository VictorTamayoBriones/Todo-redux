import styled from 'styled-components';

export const Check = ({onChange, value}) => <ButtonCheck type={'checkbox'} value={value} onChange={onChange}/>

const ButtonCheck = styled.input`
`