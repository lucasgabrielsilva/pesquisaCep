import React, { useState } from 'react';
import { Container, DivColumn } from '../../styles';
import GetCep from '../../components/getCep';
import ConsultList from '../../components/consultList';
import ShowData from '../../components/showData';

function Home() {
    const [addressData, setAddressData] = useState({});
    const [consults, setConsults] = useState([]);

    const renderConsultList = () =>
        Object.keys(addressData).length > 0 ? (
            <ConsultList setAddressData={setAddressData} consults={consults} />
        ) : null;

    return (
        <Container>
            <DivColumn>
                <GetCep
                    setAddressData={setAddressData}
                    setConsults={setConsults}
                />
                {window.matchMedia('(max-width: 600px)').matches
                    ? null
                    : renderConsultList()}
            </DivColumn>
            {Object.keys(addressData).length > 0 ? (
                <ShowData addressData={addressData} />
            ) : null}
        </Container>
    );
}

export default Home;
