import React from 'react';
import { Container, DivMain } from './styles';
import { Label, DivRow } from '../../styles';

function ShowData({ addressData }) {
    return (
        <Container>
            <Label type={'title'}> Dados sobre o CEP: {addressData.cep} </Label>
            <DivMain>
                {addressData.logradouro !== '' ? (
                    <DivRow width={'100%'}>
                        <Label type={'title'} width={'100%'}>
                            {' '}
                            Logradouro:{' '}
                        </Label>
                        <Label
                            title={'Logradouro'}
                            type={'response'}
                            width={'100%'}
                        >
                            {' '}
                            {addressData.logradouro}{' '}
                        </Label>
                    </DivRow>
                ) : null}
                {addressData.bairro !== '' ? (
                    <DivRow width={'100%'}>
                        <Label type={'title'} width={'100%'}>
                            {' '}
                            Bairro:{' '}
                        </Label>
                        <Label
                            title={'Bairro'}
                            type={'response'}
                            width={'100%'}
                        >
                            {' '}
                            {addressData.bairro}{' '}
                        </Label>
                    </DivRow>
                ) : null}
                {addressData.complemento !== '' ? (
                    <DivRow width={'100%'}>
                        <Label type={'title'} width={'100%'}>
                            {' '}
                            Complemento:{' '}
                        </Label>
                        <Label
                            title={'Complemento'}
                            type={'response'}
                            width={'100%'}
                        >
                            {' '}
                            {addressData.complemento}{' '}
                        </Label>
                    </DivRow>
                ) : null}
                {addressData.localidade !== '' ? (
                    <DivRow width={'100%'}>
                        <Label type={'title'} width={'100%'}>
                            {' '}
                            Município:{' '}
                        </Label>
                        <Label
                            title={'Município'}
                            type={'response'}
                            width={'100%'}
                        >
                            {' '}
                            {addressData.localidade}{' '}
                        </Label>
                    </DivRow>
                ) : null}
                {addressData.uf !== '' ? (
                    <DivRow width={'100%'}>
                        <Label type={'title'} width={'100%'}>
                            {' '}
                            Estado:{' '}
                        </Label>
                        <Label
                            title={'Estado'}
                            type={'response'}
                            width={'100%'}
                        >
                            {' '}
                            {addressData.uf}{' '}
                        </Label>
                    </DivRow>
                ) : null}
                {addressData.ddd !== '' ? (
                    <DivRow width={'100%'}>
                        <Label type={'title'} width={'100%'}>
                            {' '}
                            DDD:{' '}
                        </Label>
                        <Label title={'DDD'} type={'response'} width={'100%'}>
                            {' '}
                            {addressData.ddd}{' '}
                        </Label>
                    </DivRow>
                ) : null}
                {addressData.ibge !== '' ? (
                    <DivRow width={'100%'}>
                        <Label type={'title'} width={'100%'}>
                            {' '}
                            IBGE:{' '}
                        </Label>
                        <Label
                            title={'Código do IGBE'}
                            type={'response'}
                            width={'100%'}
                        >
                            {' '}
                            {addressData.ibge}{' '}
                        </Label>
                    </DivRow>
                ) : null}
                {addressData.siafi !== '' ? (
                    <DivRow width={'100%'}>
                        <Label type={'title'} width={'100%'}>
                            {' '}
                            SIAFI:{' '}
                        </Label>
                        <Label
                            title={'Código do SIAFI'}
                            type={'response'}
                            width={'100%'}
                        >
                            {' '}
                            {addressData.siafi}{' '}
                        </Label>
                    </DivRow>
                ) : null}
                {addressData.gia !== '' ? (
                    <DivRow width={'100%'}>
                        <Label type={'title'} width={'100%'}>
                            {' '}
                            GIA:{' '}
                        </Label>
                        <Label
                            title={'Código GIA'}
                            type={'response'}
                            width={'100%'}
                        >
                            {' '}
                            {addressData.gia}{' '}
                        </Label>
                    </DivRow>
                ) : null}
            </DivMain>
        </Container>
    );
}

export default ShowData;
