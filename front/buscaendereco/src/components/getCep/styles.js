import styled from 'styled-components';
import {FaSearchLocation} from 'react-icons/fa';

const Container = styled.div`
    border: 1px solid #81364b;
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;

    @media only screen and (max-width: 1500px){
        height: 45vh;
        width: 25vw;
    }
    @media only screen and (max-width: 600px){
        height: 90vh;
        width: 90vw;
    }
`;

const DivImage = styled.div`
    height: 30%;
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
    background-color: inherit;
`;

const Icon = styled(FaSearchLocation)`
    height: 100%;
    width: 50%;
    color: #81364b;
`;

const DivForm = styled.div`
    height: 40%;
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: inherit;
`;

const DivRow = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: inherit;

    @media only screen and (max-width: 1500px){
        width: ${props => (props.width)};
    }
    @media only screen and (max-width: 600px){
        width: 100%;
    }
`;

export { Container, DivImage, DivForm, DivRow, Icon};
