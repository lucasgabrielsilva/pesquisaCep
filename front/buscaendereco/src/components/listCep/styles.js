import styled from 'styled-components';

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


const DivForm = styled.div`
    height: 80%;
    width: 90%;
    align-self: flex-end;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: inherit;
`;

const Ul = styled.ul`
    height: 100%;
    width: 100%;
    color: #81364b;
    font-size: 1rem;
    text-decoration: underline;
`;

const Li = styled.li`
    margin: 5px;
    cursor: pointer;
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

export { Container, Ul, Li, DivForm, DivRow};
