import React, { useState } from 'react';
import TwittlerHeader from './components/twittlerHeader';
import WritingArea from './components/writingArea';
import CommentsArea from './components/commentsArea';
import dummyData from './dummyData.json';
import './css/app.css';

function App() {
  const [userMsg, setUserMsg] = useState(dummyData);
  const addUserMsg = (userName: string, userComment: string) => {
    let allMsg = userMsg.slice();
    let newMsg = {
      msgIdx: allMsg.length + 1,
      userName: userName,
      userMsg: userComment,
      createdAt: getTimeStamp(new Date())
    }
    allMsg.push(newMsg);
    setUserMsg(allMsg);
  };
  const getTimeStamp = (date: Date): string => {
    let stamp =
     leadingZeros(date.getFullYear(), 4) + '-' +
     leadingZeros(date.getMonth() + 1, 2) + '-' +
     leadingZeros(date.getDate(), 2) + ' ' +
     leadingZeros(date.getHours(), 2) + ':' +
     leadingZeros(date.getMinutes(), 2) + ':' +
     leadingZeros(date.getSeconds(), 2);
    return stamp;
  };
  const leadingZeros = (n: number, digits: number) => {
    let zero = '';
    let newNumber = String(n);
    if (newNumber.length < digits) {
      for (let i = 0; i < digits - newNumber.length; i++)
        zero += '0';
    }
    return zero + newNumber;
  };
  return (
    <div className="App">
      <TwittlerHeader/>
      <WritingArea addUserMsg={addUserMsg}/>
      <CommentsArea userMsg={userMsg}/>
    </div>
  );
}

export default App;
