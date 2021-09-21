import React, { useState } from 'react';
import { Container, DivMain, Ul, Li } from './styles';
import { Label } from '../../styles';
import Api from '../../config/api';

function consultList(props) {
    const [error, setError] = useState(false);

    const handleClick = async (event) => {
        try {
            const response = await Api.get(`search/${event.target.id}`);
            props.setAddressData(response.data.data);
        } catch (err) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        }
    };

    return (
        <Container>
            <Label type={'title'}> Histórico de consultas: </Label>
            <DivMain>
                {error ? (
                    <Label> Ocorreu um erro, Aguarde um momento... </Label>
                ) : (
                    <Ul>
                        {props.consults.length > 0
                            ? props.consults.map((data, index) => (
                                  <Li
                                      title={'Clique para refazer a consulta'}
                                      id={data.cep}
                                      key={index}
                                      onClick={handleClick}
                                  >
                                      {' '}
                                      {`${data.cep} - ${data.date}`}{' '}
                                  </Li>
                              ))
                            : null}
                    </Ul>
                )}
            </DivMain>
        </Container>
    );
}

export default consultList;
