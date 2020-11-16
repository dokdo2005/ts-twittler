import React, { useState } from 'react';
import TwittlerHeader from './components/twittlerHeader';
import WritingArea from './components/writingArea';
import CommentsArea from './components/commentsArea';
import dummyData from './dummyData.json';
import './css/app.css';

interface userMsgEntry {
    msgIdx: number;
    userName: string;
    userMsg : string;
    createdAt: string
}

function App() {
  const [userMsg, setUserMsg] = useState(dummyData);
  const addUserMsg = (newMsg: userMsgEntry) => {
    let allMsg = userMsg.slice();
    allMsg.push(newMsg);
    setUserMsg(allMsg);
  };
  return (
    <div className="App">
      <TwittlerHeader/>
      <WritingArea/>
      <CommentsArea userMsg={userMsg}/>
    </div>
  );
}

export default App;
