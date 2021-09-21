import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Api from '../../config/api';
import { Container, DivImage, DivMain, Image } from './styles';
import { Button, Input, Label, DivRow } from '../../styles';
import Logo from "../../assets/images/logo.svg";

function GetCep(props) {
    const [cep, setCep] = useState('');
    const [inputColor, setInputColor] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('Buscar');

    useEffect(() => {
        if (message !== '') {
            setInputColor('red');
        } else {
            setInputColor('');
        }
    }, [message]);

    const handleMask = (event) => {
        const response = event.target.value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(\d{5})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1');
        setCep(response);
    };

    const handleRequest = async () => {
        try {
            let response = await Api.get(`search/${cep}`, {
                validateStatus: false,
            });
            if (response.status === 404) {
                response = await Api.post(
                    'save',
                    { cep },
                    { validateStatus: false }
                );
                if (response.status === 404) {
                    setMessage('CEP Não Encontrado');
                }
            }
            if (
                response.status === 200 ||
                response.status === 201 ||
                response.status === 304
            ) {
                props.setAddressData(response.data.data);
                props.setConsults((list) => [
                    ...list,
                    {
                        cep,
                        date: moment().format('HH:mm[h] - DD/MM/YYYY'),
                    },
                ]);
            } else {
                setMessage('Ocorreu um erro, Tente novamente');
            }
            setCep('');
            setButtonText('Buscar');
        } catch (err) {
            setCep('');
            setButtonText('Buscar');
            setMessage('Ocorreu um erro, Tente novamente');
        }
    };

    const handleClick = async () => {
        if (cep.length === 9) {
            setMessage('');
            setButtonText('Buscando...');
            handleRequest();
        } else {
            setMessage('CEP Inválido');
        }
    };

    return (
        <Container>
            <DivImage>
                <Image src={Logo} alt={'Logo'} />
            </DivImage>
            <Label type={'title'}> Pesquisa CEP</Label>
            <DivMain>
                <DivRow width="100%">
                    <Input
                        width="100%"
                        title={'Informe o CEP desejado'}
                        placeholder="CEP:"
                        borderColor={inputColor}
                        value={cep}
                        onFocus={() => setMessage('')}
                        onChange={handleMask}
                    />
                    <Label> {message} </Label>
                </DivRow>
                <Button
                    width="40%"
                    title={'Pesquisar CEP'}
                    onClick={handleClick}
                >
                    {' '}
                    {buttonText}{' '}
                </Button>
            </DivMain>
        </Container>
    );
}

export default GetCep;
