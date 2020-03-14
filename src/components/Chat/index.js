import React from 'react';
import styled from 'styled-components';
import NumberMessages from '../NumberMessages';

const StyledButton = styled.div`
  position: relative;
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  background: ${props => props.isActive ? "#e3e3e3" : "white"};
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
`;

const StyledPhoto = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid black;
  height: auto;
  width: 45px;
  align-items: center;
  font-size: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  width: 70%;
  padding: 0 10px;
`;

const StyledName = styled.p`
  font-size: 20px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0;
  margin-bottom: 5px;
  white-space: nowrap;
`;

const StyledMessage = styled.p`
  font-size: 12px;
  height: 14px;
  margin-top: 0;
  margin-bottom: 0;
  color: grey;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default function Chat({name, photo, lastChat, unreadMessage, onClick, isActive}) {

  return (
    <StyledButton onClick={()=>onClick()} isActive={isActive}>
      <StyledPhoto>
        {photo ? <img src={photo}/> : 
        name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')}
      </StyledPhoto>
      <Wrapper>
        <StyledName>{name}</StyledName>
        <StyledMessage>{lastChat}</StyledMessage>
      </Wrapper>
      <NumberMessages number={unreadMessage} />
    </StyledButton>
  );
}