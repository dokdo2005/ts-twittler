import React from 'react';
import CommentEntry from './commentEntry';
import '../css/commentsArea.css';

interface userMsgEntry {
    msgIdx: number;
    userName: string;
    userMsg : string;
    createdAt: string
}

export default function CommentsArea({userMsg}: {userMsg: userMsgEntry[]}) {
    const getUserMsg = userMsg.map(entry => (
        <CommentEntry key={entry.msgIdx} msgEntry={entry}/>
    ));
    return(
        <div className="commentsArea">
            {getUserMsg}
        </div>
    )
}