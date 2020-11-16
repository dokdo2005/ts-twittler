import React from 'react';
import '../css/commentEntry.css';

interface userMsgEntry {
    msgIdx: number;
    userName: string;
    userMsg : string;
    createdAt: string
}

export default function CommentEntry({msgEntry}: {msgEntry: userMsgEntry}) {
    return (
        <div className="commentEntry">
            <li className="tweetBox">
                <div className="tweetHeader">
                    <span className="tweetAuthor">{msgEntry.userName}</span>
                    <span className="tweetTimestamp">{msgEntry.createdAt}</span>
                </div>
                <div className="tweetContent">{msgEntry.userMsg}</div>
            </li>
        </div>
    )
}