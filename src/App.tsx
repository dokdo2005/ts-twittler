import React from 'react';
import TwittlerHeader from './components/twittlerHeader';
import WritingArea from './components/writingArea';
import CommentsArea from './components/commentsArea';
import './css/app.css';

function App() {
  return (
    <div className="App">
      <TwittlerHeader/>
      <WritingArea/>
      <CommentsArea/>
    </div>
  );
}

export default App;
