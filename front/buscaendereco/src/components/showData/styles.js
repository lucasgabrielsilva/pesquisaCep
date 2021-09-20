import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    border: 1px solid #81364b;
    border-radius: 10px;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;


    @media only screen and (max-width: 1500px){
        height: 45vh;
        width: 55vw;
    }
    @media only screen and (max-width: 600px){
        height: 90vh;
        width: 90vw;
    }

`;

const DivData = styled.div`
    height: 50%;
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: inherit;

    @media only screen and (max-width: 600px){
        flex-flow: column nowrap;
        justify-content: center;
    }
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

export { Container, DivData, DivRow};
