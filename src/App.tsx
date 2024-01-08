import styled from 'styled-components';
import React from 'react';
import { ScrollAnimation } from './lib';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  font-size: 30px;
  font-weight: 900;
`;

function App() {
  return (
    <>
      <Container>
        <ScrollAnimation startingPoint="left" amount={300}>
          <Wrapper onClick={() => console.log('hi')}>abc</Wrapper>
        </ScrollAnimation>
        <ScrollAnimation startingPoint="right" amount={300} duration={0.5} repeat={true} delay={1}>
          <Wrapper>abc</Wrapper>
        </ScrollAnimation>
      </Container>
      <Container>
        <ScrollAnimation startingPoint="top" amount={300} repeat={true}>
          <Wrapper>abc</Wrapper>
        </ScrollAnimation>
        <ScrollAnimation startingPoint="bottom" amount={300}>
          <Wrapper>abc</Wrapper>
        </ScrollAnimation>
      </Container>
    </>
  );
}

export default App;
