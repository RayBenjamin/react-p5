import React from "react";
import p5Types from "p5";
import Sketch from "react-p5";

function FirstDrawing () {
  let rad = 60; // Width of the shape
  let xpos:number, ypos:number; // Starting position of shape
  
  let xCircleSpeed = 3; // Speed of the shape
  let yCircleSpeed = 3; // Speed of the shape
  
  let xdirection = 1; // Left or Right
  let ydirection = 1; // Top to Bottom
  //backgound colors
  let r:number,g:number,b:number = 255;
  let drawingSwitch:number = 0;

  //See annotations in JS for more information
  //-----------------------------------------------------setup
	const setup = (p5: p5Types, canvasParentRef: Element) => {

    // displaywidth and height for full monitor dimensions
		// p5.createCanvas(p5.displayWidth, p5.displayHeight); 
    
    // windowwidth and windowheight for browser height
		p5.createCanvas(p5.windowWidth,p5.windowHeight); 

    p5.frameRate(60);
    p5.ellipseMode(p5.RADIUS);
    // Set the starting position of the shape
    xpos = p5.width / 2;
    ypos = p5.height / 2;
	};



  //------------------------------------------------------draw
  // dont use setStates in draw
  const draw = (p5: p5Types) => {
    dvdballBounce(p5);
  };
  
  // const draw = (p5: p5Types) => {
  //   switch(parseInt(p5.key)) {
  //     case 0: 
  //       drawingSwitch = 0;
  //       break;   
  //     case 1: 
  //       drawingSwitch = 1;
  //       break;
  //   }
  //   switch(drawingSwitch) {
  //     case 0: {
  //       dvdballBounce(p5);
  //       break;
  //     }
  //     case 1: {
  //       break;
  //     }
  //   }
  // };

  const dvdballBounce = (p5:p5Types)=> {
    p5.background(r,g,b);
    // Update the position of the shape
    xpos = xpos + xCircleSpeed * xdirection;
    ypos = ypos + yCircleSpeed * ydirection;

    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (xpos > p5.width - rad || xpos < rad) {
      xdirection *= -1;
      r = p5.random(1,255);
      g = p5.random(1,255);
      b = p5.random(1,255);     
    }
    if (ypos > p5.height - rad || ypos < rad) {
      ydirection *= -1;
      r = p5.random(1,255);
      g = p5.random(1,255);
      b = p5.random(1,255);     
    } 
    // Draw the shape
    p5.ellipse(xpos, ypos, rad);
  }
  


  return (
    <Sketch setup={setup} draw={draw} />
  );
}
export default FirstDrawing;
