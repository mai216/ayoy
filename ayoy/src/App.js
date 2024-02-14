import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff4081;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  width: 400px;
  height: 300px;
  background: linear-gradient(to right, #ff4081, #ff8f73);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-top: 0;
`;

const CardMessage = styled.p`
  font-size: 18px;
`;

const App = () => {
  const [showCard, setShowCard] = useState(false);

  const handleButtonClick = () => {
    setShowCard(true);
  };

  return (
    <Container>
      {!showCard && <Button onClick={handleButtonClick}>Open Card</Button>}
      {showCard && (
        <Card>
          <CardTitle>Happy Valentine's Day!</CardTitle>
          <CardMessage>
            Wishing you a day filled with love, joy, and happiness.
          </CardMessage>
        </Card>
      )}
    </Container>
  );
};

export default App;