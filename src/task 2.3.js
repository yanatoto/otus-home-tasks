"use strict";

let ifCompatible = function (circle, square) {
    let circleDiameter = 2 * Math.sqrt(circle / Math.PI);
  
    let squareParam = Math.sqrt(square);
  
    if (circleDiameter <= squareParam) {
      console.log("yes");
    } else {
      console.log("no");
    }
  };
  
  ifCompatible(45, 60);
  
