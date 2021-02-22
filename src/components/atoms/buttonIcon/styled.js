import styled from 'styled-components'
import { Button } from 'antd';
import { colors } from '../../../colors';

export const ButtonComponent = styled(Button)`
    background-color: ${({color}) => color ? color : colors.yellow };
    color: ${ colors.black };
    cursor: pointer;
    width: 3.5vw;
    height: 3.5vw;
    border:none;
    border-radius: 50px;
    &:hover {
        background-color: ${ ({color})=> color ? color : colors.yellow };    
        opacity: 0.8;
        color: ${ colors.black };
    }
    &:focus {
        background-color: ${ ({color}) => color ? color : colors.yellow };    
        opacity: 0.8;
        color: ${ colors.black } ;    
    }
    &:click {
        color: ${ colors.black };  
    }
`;

