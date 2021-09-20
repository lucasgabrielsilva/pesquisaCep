import React from "react";
import { Container, DivData, DivRow } from './styles';
import { Label } from '../../styles';

function ShowData() {


  return (
      <Container>

        <DivData>

            <DivRow width='100%'>
            <Label> Logradouro:  </Label>
            <Label response width='100%' > Rua João Pessa Júnior </Label>
            </DivRow>
            <DivRow width='49%'>
            <Label> Bairro: </Label>
            <Label response width='100%'> teste </Label>
            </DivRow>
            <DivRow width='49%'>
            <Label> Complemento: </Label>
            <Label response width='100%'> teste </Label>
            </DivRow>
            <DivRow width='49%'>
            <Label> Cidade: </Label>
            <Label response width='100%'> teste </Label>
            </DivRow>
            <DivRow width='49%'>
            <Label> Estado: </Label>
            <Label response width='100%'> teste </Label>
            </DivRow>
            <DivRow width='24%'>
            <Label> IBGE: </Label>
            <Label response width='100%'> teste </Label>
            </DivRow>
            <DivRow width='24%'>
            <Label> GIA: </Label>
            <Label response width='100%'> teste </Label>
            </DivRow>
            <DivRow width='24%'>
            <Label> DDD: </Label>
            <Label response width='100%'> teste </Label>
            </DivRow>
            <DivRow width='24%'>
            <Label> SIAFI: </Label>
            <Label response width='100%'> teste </Label>
            </DivRow>





        </DivData>
      </Container>


  );
}

export default ShowData;
