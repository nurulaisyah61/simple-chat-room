import React from 'react';
import styled from 'styled-components';

const StyledNumber = styled.p`
  display: block;
  border-radius: 50%;
  margin: 0 auto;
  padding: 5px;
  border: none;
  background: #FDC7C2;
  color: #A8342F;
`;

const Wrapper = styled.div`
  margin: auto;
`;

export default function NumberMessages({number}) {
  return (
    <Wrapper>
      {number > 0 && <StyledNumber>{number}</StyledNumber>}
    </Wrapper>
  );
}