import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

const Screen = styled.h1`
  display: flex;
  color: white;
  background-color: black;
  height: 50vh;
  width: 50vw;
  border-radius: 2vh;
  padding: 30px;
  justify-items: center;
  align-items: center;
  text-align: center;
`;

const NotFoundPage = () => (
  <Container>
    <Screen><p>This content is not available in your country</p></Screen>
    <p>Haha. No you just tried to access something that doesn't exist.</p>
  </Container>
);

export default NotFoundPage;
