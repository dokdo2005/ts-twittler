import React from 'react';
import '../css/writingArea.css';

export default function WritingArea() {
    return(
        <div className="writingArea">
            <div className="inputArea">
                <span className="inputLabel">UserName</span>
                <span className="inputBox"><input type="text" className="userName"></input></span>
            </div>
            <div className="inputArea">
                <span className="inputLabel">Comment</span>
                <span className="inputBox"><textarea className="userComment"></textarea></span>
            </div>
            <div className="buttonArea">
                <span className="submitBtn"><button type="submit">Tweet!</button></span>
                <span className="rewriteBtn"><button type="reset">Write Again</button></span>
                <span className="reloadBtn"><button type="button">Check New Tweet</button></span>
            </div>
        </div>
    )
}