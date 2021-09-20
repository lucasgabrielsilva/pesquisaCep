import React, { useState } from "react";
import { Container, DivImage, DivForm, DivRow, Icon} from './styles';
import { Button, Input, Label } from '../../styles';

function GetCep() {

    const [message] = useState('');

  return (
      <Container>
        <DivImage>
            <Icon />
        </DivImage>
        <DivForm>
            <DivRow width='100%' >
            <Input width='100%' placeholder="CEP:"/>
            <Label> {message} </Label>
            </DivRow>
            <Button width='40%'> Buscar </Button>
        </DivForm>
      </Container>


  );
}

export default GetCep;
