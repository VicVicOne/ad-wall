window.onload = function () {
  const body = document.body;
  const maxHeight = window.innerHeight;
  const maxWidth = window.innerWidth;
  const minDivHeight = 100;
  const maxDivHeight = 200;
  const minDivWidth = 200;
  const maxDivWidth = 500;

  const addRandomDiv = (xposition, yposition, height, width, index) => {
    console.log(`INDEX ${index} Adding random div... `);

    const randomDiv = document.createElement("div");
    let randomHeight = Math.floor(Math.random() * maxDivHeight) + minDivHeight;
    randomHeight = randomHeight > height ? height : randomHeight;

    let randomWidth = Math.floor(Math.random() * maxDivWidth) + minDivWidth;
    randomWidth = randomWidth > width ? width : randomWidth;

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Random color
    console.log(
      `INDEX ${index}  Available space (Height: ${height} Width: ${width}) Starting position (xposition: ${xposition} yposition: ${yposition}) randomHeight: ${randomHeight} randomWidth: ${randomWidth}`
    );

    randomDiv.style.height = `${randomHeight}px`;
    randomDiv.style.width = `${randomWidth}px`;
    randomDiv.style.backgroundColor = randomColor;
    randomDiv.style.position = "absolute"; // Position the div absolutely
    randomDiv.style.left = `${xposition}px`; // Set the x position
    randomDiv.style.top = `${yposition}px`; // Set the y position
    randomDiv.textContent = `${randomWidth}x${randomHeight}`; // Append text to the div

    const mainDiv = document.getElementById("main-div");

    mainDiv.appendChild(randomDiv);

    const nextxposition2 = xposition;
    const nextyposition2 = yposition + randomHeight;
    const nextheight2 = height - randomHeight;
    const nextwidth2 = randomWidth;

    console.log(
      `INDEX ${index}  VERTICAL NEXT (xposition: ${nextxposition2} yposition: ${nextyposition2} )  (height: ${nextheight2}  width: ${nextwidth2})`
    );

    if (nextheight2 != 0) {
      addRandomDiv(
        nextxposition2,
        nextyposition2,
        nextheight2,
        nextwidth2,
        index + 1
      );
    } else {
      console.log(`END RECURSION Index ${index}`);
    }

    const nextxposition = xposition + randomWidth;
    const nextyposition = yposition;
    const nextheight = height;
    const nextwidth = width - randomWidth;

    console.log(
      `INDEX ${index}  HORIZONTAL Next xposition: ${nextxposition} Next yposition: ${nextyposition} Next height: ${nextheight} Next width: ${nextwidth}`
    );

    if (nextwidth != 0) {
      addRandomDiv(
        nextxposition,
        nextyposition,
        nextheight,
        nextwidth,
        index + 1
      );
    } else {
      console.log(`END RECURSION Index ${index}`);
    }
  };

  const fillPageWithRandomDivs = () => {
    console.log("Filling page with random divs...");
    console.log("Viewport height: ", maxHeight);
    console.log("Viewport width: ", maxWidth);

    const mainDiv = document.createElement("div");

    mainDiv.id = "main-div";
    mainDiv.style.height = `${maxHeight}px`;
    mainDiv.style.width = `${maxWidth}px`;
    mainDiv.style.backgroundColor = "#4cd17e";
    body.appendChild(mainDiv);

    //addRandomDiv(0, 0, maxHeight, maxWidth, 1);
  };

  fillPageWithRandomDivs();
};
