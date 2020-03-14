import React, { useState, useEffect } from 'react';
import Chat from './components/Chat';
import styled from 'styled-components';
import NumberMessages from './components/NumberMessages';

const StyledHeader = styled.div`
  display: flex;
  width: fit-content;
  h1 {
    padding: 0 10px;
  }
`;

const Wrapper = styled.div`
  width: 360px;
  height: 640px;
  margin: auto;
  border: 1px solid black;
`;

const LoadingSection = styled.div`
  margin: auto;
  width: fit-content;
`;

function App() {
  const [rooms, setRooms] = useState([]);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(`https://www.mocky.io/v2/5e675f3b3100007300230876`);
      data = await data.json();
      data = data.rooms.map(e=>{
        return {id: e.id, unreadMessage: e.unread_message, name: e.display_name, lastChat: e.last_chat, isActive: false}
      });
      const unreadMessage = data.reduce((sum, curr) => sum+curr.unreadMessage, 0);
      setRooms(data);
      setUnread(unreadMessage);
    }
    fetchData();
  },[]);

  const chatClicked = (e) => {
    let newRooms = rooms.map(i => {
      if (i.id === e) {
        return {
          ...i,
          unreadMessage: 0,
          isActive: true
        }
      }
      return {...i, isActive: false}
    });
    const unreadMessage = newRooms.reduce((sum, curr) => sum+curr.unreadMessage, 0);
    setRooms(newRooms);
    setUnread(unreadMessage);
  }

  return (
    <Wrapper>
      <StyledHeader>
        <h1>Chats</h1>
        <NumberMessages number={unread} />
      </StyledHeader>
      {rooms.length === 0 &&  <LoadingSection>Loading...</LoadingSection>}
      {rooms.map(e => {
        return <Chat 
          key={e.id} 
          name={e.name} 
          lastChat={e.lastChat} 
          unreadMessage={e.unreadMessage} 
          onClick={()=>chatClicked(e.id)}
          isActive={e.isActive}/>
      })}
    </Wrapper>
  );
}

export default App;
