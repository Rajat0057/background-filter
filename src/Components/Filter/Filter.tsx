import React from "react";
import { useState } from "react";
import "./Filter.css";
import { RefreshCw } from "react-feather";
import html2canvas from "html2canvas";


function Filter() {
  /* Initialization the use state for the after and before image */
  const [success, setSuccess] = useState<boolean>(false);
  const [trans, settrans] = useState<boolean>(false);
  // eslint-disable-next-line jsx-a11y/alt-text
  const first: JSX.Element = <img src="./Images/beforegirl.png" alt="first" />;
  // eslint-disable-next-line jsx-a11y/alt-text
  const after: JSX.Element = <img src="./Images/aftergirl.png" alt="after" />;

  function change(): void {
    setSuccess(true);
  }
  function changeafter(): void {
    setSuccess(false);
  }

  /* Function for the set the transparent background in the image div */

  function transparent(): void {
    const elm2: HTMLElement = document.querySelector<HTMLElement>(".image")!;
    elm2.style.backgroundImage = "url('./Images/OIP.jpg')";
    settrans(true);
  }

  /* Function for the Color change background on the image div*/

  function handleClick(color: string) {
    const elm: HTMLElement = document.querySelector<HTMLElement>(".image")!;
    elm.style.background = "none";
    elm.style.backgroundColor = color;
    settrans(false);
  }

  /* Function for the Download div as the image using html2canvas library */

  function download(): void {
    html2canvas(document.getElementById("my-node")!).then(function (
      canvas: HTMLCanvasElement
    ) {
      const elm3: HTMLElement = document.querySelector<HTMLElement>(".image")!;
      if (elm3.style.backgroundImage) {
        if (trans) {
          const anchorTag: HTMLAnchorElement = document.createElement("a");
          anchorTag.download = "filename.jpg";
          anchorTag.href = canvas.toDataURL();
          anchorTag.target = "_blank";
          anchorTag.click();
        } 
        else {
        }
      }
    });
  }

  return (
    /* Main Div for handle the image and buttons for the UI  */
    <div>
      <div className="button">
        <button className="button1" onClick={changeafter}>
          Before
        </button>
        <button className="button2" onClick={change}>
          After
        </button>
        <div className="yellow-box">
          <button
            className="yellow"
            onClick={() => handleClick("yellow")}
          ></button>
        </div>
        <div className="pink-box">
          <button className="pink" onClick={() => handleClick("pink")}></button>
        </div>
        <div className="cyan-box">
          <button
            className="cyan"
            onClick={() => handleClick("rgb(0, 255, 179)")}
          ></button>
        </div>
        <div className="red-box">
          <button className="red" onClick={() => handleClick("red")}></button>
        </div>
        <div className="transparent-box">
          <button
            className="transparent"
            id="tr"
            onClick={transparent}
          ></button>
        </div>
        <div className="mixed-box">
          <button className="mixed"></button>
        </div>
        <div className="restart">
          <RefreshCw onClick={changeafter} size="28px" />
        </div>
      </div>
      <div className="image" id="my-node">
        {success ? after : first}
      </div>
      <button className="button3" id="btn" onClick={download}>
        Download
      </button>
      <br />
      <button className="button4">Share</button>
      <div className="display">
        <img src="./images/aftergirl.png" alt="" />
      </div>
    </div>
  );
}

export default Filter;
