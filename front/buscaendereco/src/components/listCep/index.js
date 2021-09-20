import React from "react";
import { Container,  DivForm, Ul, Li} from './styles';
import { Label } from '../../styles';

function GetCep() {


  return (
      <Container>
          <Label title > Historico de consultas: </Label>
        <DivForm>
            <Ul>
                <Li> 87309-117 - 15:30h - 20/09/2021</Li>
                <Li> 87309-117 - 15:30h - 20/09/2021</Li>
                <Li> 87309-117 - 15:30h - 20/09/2021</Li>
                <Li> 87309-117 - 15:30h - 20/09/2021</Li>
                <Li> 87309-117 - 15:30h - 20/09/2021</Li>
                <Li> 87309-117 - 15:30h - 20/09/2021</Li>
                <Li> 87309-117 - 15:30h - 20/09/2021</Li>
            </Ul>

        </DivForm>
      </Container>


  );
}

export default GetCep;
