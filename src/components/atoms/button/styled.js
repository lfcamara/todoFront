import styled from 'styled-components'
import { Button } from 'antd';
import { colors } from '../../../colors';

export const ButtonComponent = styled(Button)`
    background-color: ${ colors.gray };
    color: ${ colors.black };
    cursor: pointer;
    width: ${({width}) => width ? (width+'% !important') : 'none'} ;
    &:hover {
        background-color: ${ colors.gray };    
        opacity: 0.8;
        color: ${ colors.gray };
    }
    &:focus {
        background-color: ${ colors.gray };    
        opacity: 0.8;
        color: ${ colors.white } ;      
    }
    &:click {
        color: ${ colors.gray };    
    }
`;

