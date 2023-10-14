import React, { useState } from "react";
 
const TypingInput = () => {
    const [userInput, setUerInput] = useState("");
 
    return (
        <div>
            <div className="container">
                <div className="mainContainer">
                    <div className="navbar">
                        <div className="logo">
                            <h1>TypeCat</h1>
                            <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="KeyboardIcon">
                                <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"></path>
                            </svg>
                        </div>
                        <div className="profile">
                            <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="AccountCircleIcon">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"></path>
                            </svg>
                        </div>
                    </div>
 
                    <div className="timers">
                        <div className="remainingTime">15</div>
                        <div className="actualTime">
                            <p>15s</p>
                            <p>30s</p>
                            <p>60s</p>
                        </div>
                    </div>
 
                    <div className="inputUser">
                        {/* <input type="text" name="" id="inputUser" value={userInput} onInput={(e) => {
                                setUerInput(e.target.value);
                            }}
                        /> */}
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            value={userInput}
                            onChange={(e) =>
                                setUerInput(e.target.value)
                            }></textarea>
                    </div>
 
                    <div className="refresh">
                        <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="RefreshIcon">
                            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
                        </svg>
                    </div>
 
                    <div className="reset">
                        <button>esc</button>
                        <p>-</p>
                        <p>reset</p>
                    </div>
 
                    <div className="words">
                        <div className="buttons">
                            <button>10</button>
                            <button>50</button>
                            <button>80</button>
                            <button>100</button>
                        </div>
                        <p>-</p>
                        <p>no. of words</p>
                    </div>
 
                    <div className="footer">
                        <div className="social">
                            <div className="github"></div>
                            <div className="linkedIn"></div>
                            <div className="mail"></div>
                            <div className="instagram"></div>
                        </div>
                        <div className="themeMode">
                            <select name="" id="">
                                <option value="">Darken-Black</option>
                                <option value="">Coloured-Grey</option>
                                <option value="">Coloured-Pink</option>
                                <option value="">Coloured-Green</option>
                                <option value="">Coloured-Blue</option>
                                <option value="">Coloured-LightPurple</option>
                                <option value="">Lighten-White</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default TypingInput;