import React, { useState } from 'react';
import '../css/writingArea.css';

export default function WritingArea({addUserMsg}: any) {
    const [userComment, setUserComment] = useState({
        name: '',
        comment: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserComment({
          ...userComment,
          [name]: value
        });
    };
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (userComment.name === '') {
            alert('사용자 이름을 입력해주세요!');
        } else if (userComment.comment === '') {
            alert('트윗 내용을 입력해주세요!');
        } else {
            addUserMsg(userComment.name, userComment.comment);
            setUserComment({
                name: '',
                comment: ''
            });
        }
    };
    const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setUserComment({
            name: '',
            comment: ''
        });
    };
    return(
        <div className="writingArea">
            <form id="writeComment">
                <div className="inputArea">
                    <span className="inputLabel">UserName</span>
                    <span className="inputBox"><input type="text" name="name" className="userName" onChange={handleChange} value={userComment.name}></input></span>
                </div>
                <div className="inputArea">
                    <span className="inputLabel">Comment</span>
                    <span className="inputBox"><input type="text" name="comment" className="userComment" onChange={handleChange} value={userComment.comment}></input></span>
                </div>
                <div className="buttonArea">
                    <span className="submitBtn"><button type="submit" onClick={handleSubmit}>Tweet!</button></span>
                    <span className="rewriteBtn"><button type="reset" onClick={handleReset}>Write Again</button></span>
                    <span className="reloadBtn"><button type="button">Check New Tweet</button></span>
                </div>
            </form>
        </div>
    )
}