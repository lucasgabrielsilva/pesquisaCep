import styled from 'styled-components';

const Container = styled.div`
    border-top: 1px solid #81364b;
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;

    @media only screen and (max-width: 1500px) {
        height: 30vh;
        width: 25vw;
    }
`;

const DivMain = styled.div`
    height: 70%;
    width: 90%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: inherit;
    overflow: auto;
`;

const Ul = styled.ul`
    font-size: 1rem;
    text-decoration: underline;
    list-style: none;
`;

const Li = styled.li`
    margin: 5px;
    cursor: pointer;
`;

export { Container, DivMain, Ul, Li };
