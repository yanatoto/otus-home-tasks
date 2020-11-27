const ifCompatible = function (circle, square) {
  const circleDiameter = 2 * Math.sqrt(circle / Math.PI);

  const squareParam = Math.sqrt(square);

  if (circleDiameter <= squareParam) {
    console.log("yes");
  } else {
    console.log("no");
  }
};

ifCompatible(45, 60);
