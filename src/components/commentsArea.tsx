import React from 'react';
import CommentEntry from './commentEntry';
import '../css/commentsArea.css';

export default function CommentsArea() {
    return(
        <div className="commentsArea">
            <CommentEntry/>
        </div>
    )
}