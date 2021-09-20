import React from 'react';
import { Container } from '../../styles';
import GetCep from '../../components/getCep';
import ListCep from '../../components/listCep';
import ShowData from '../../components/showData';

function Home() {




  return (
      <Container>
          <GetCep />
          <ListCep />
          <ShowData />
      </Container>

    );
}

export default Home;
