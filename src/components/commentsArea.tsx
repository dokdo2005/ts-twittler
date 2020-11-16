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
    const reverseUserMsg = (userMsg: userMsgEntry[]): userMsgEntry[] => {
        let tmpArr = [];
        for (let i = userMsg.length - 1; i >= 0; i--) {
            tmpArr.push(userMsg[i]);
        }
        return tmpArr;
    };
    const getUserMsg = reverseUserMsg(userMsg).map(entry => (
        <CommentEntry key={entry.msgIdx} msgEntry={entry}/>
    ));
    return(
        <div className="commentsArea">
            {getUserMsg}
        </div>
    )
}