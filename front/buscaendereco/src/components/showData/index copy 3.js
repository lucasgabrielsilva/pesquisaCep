import React from "react";
import { Container, DivData } from './styles';
import { Label } from '../../styles';

function ShowData() {


  return (
      <Container>
        <DivData>
            <>
            <h4>teste</h4>
            <Label width='100%'> teste </Label>
            </>
            <span> oi <br/><Label> teste </Label></span>
            <span> oi <br/><Label> teste </Label></span>
            <span> oi <br/><Label> teste </Label></span>
            <span> oi <br/><Label> teste </Label></span>

        </DivData>
      </Container>


  );
}

export default ShowData;
