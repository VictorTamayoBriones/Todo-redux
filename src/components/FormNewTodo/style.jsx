import styled from 'styled-components';

export const Form = styled.article`
    width: 45%;

    h2{
        margin-bottom: 20px;
    }

    form{
        display: flex;
        flex-wrap: wrap;
        
        input{
            width: 100%;
            padding: 10px 5px;
            margin-bottom: 20px;
        }

        button{
            width: 100%;
            padding: 5px 0;
            cursor: pointer;
        }
    }
`;