import React from 'react';
import '../css/commentEntry.css';

export default function CommentEntry() {
    return (
        <div className="commentEntry">
            <li className="tweetBox">
                <div className="tweetHeader">
                    <span className="tweetAuthor">홍길동</span>
                    <span className="tweetTimestamp">2020-11-11 17:50:30</span>
                </div>
                <div className="tweetContent">Hello World!</div>
            </li>
            <li className="tweetBox">
                <div className="tweetHeader">
                    <span className="tweetAuthor">홍길동</span>
                    <span className="tweetTimestamp">2020-11-11 17:50:30</span>
                </div>
                <div className="tweetContent">Hello World!</div>
            </li>
            <li className="tweetBox">
                <div className="tweetHeader">
                    <span className="tweetAuthor">홍길동</span>
                    <span className="tweetTimestamp">2020-11-11 17:50:30</span>
                </div>
                <div className="tweetContent">Hello World!</div>
            </li>
            <li className="tweetBox">
                <div className="tweetHeader">
                    <span className="tweetAuthor">홍길동</span>
                    <span className="tweetTimestamp">2020-11-11 17:50:30</span>
                </div>
                <div className="tweetContent">Hello World!</div>
            </li>
        </div>
    )
}