const images = [
  { path: "./ads/justeatVERT.png", ratio: 0.49 },
  { path: "./ads/2.png", ratio: 0.5 },
  { path: "./ads/3.png", ratio: 0.49 },
  { path: "./ads/1.png", ratio: 1.2 },
  { path: "./ads/6.png", ratio: 1.5 },
  { path: "./ads/8.png", ratio: 2.25 },
  { path: "./ads/5.png", ratio: 3.03 },
  { path: "./ads/7.png", ratio: 4.2 },
  { path: "./ads/4.png", ratio: 10.728 },
  { path: "./ads/hyundHOR.png", ratio: 3.88 },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

let getRandomImage = (randomWidth, randomHeight) => {
  const aspectRatio = randomWidth / randomHeight;

  let imgArrays = shuffleArray(images);
  let delta = 0.5;

  for (let i = 0; i < images.length; i++) {
    if (
      images[i].ratio - delta <= aspectRatio &&
      aspectRatio <= images[i].ratio + delta
    ) {
      return images[i].path;
    }
  }

  return;
};

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
    randomHeight =
      height - randomHeight < 75 && height - randomHeight > 0
        ? height
        : randomHeight;

    let randomWidth = Math.floor(Math.random() * maxDivWidth) + minDivWidth;
    randomWidth = randomWidth > width ? width : randomWidth;
    randomWidth =
      width - randomWidth < 75 && width - randomWidth > 0 ? width : randomWidth;

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
    randomDiv.style.cursor = "pointer"; // Set the cursor to pointer
    randomDiv.classList.add("random-div");

    //const ratio = randomWidth / randomHeight;
    //randomDiv.textContent = `${ratio}`;

    // Create an img element and set its src attribute
    const img = document.createElement("img");
    img.src = getRandomImage(randomWidth, randomHeight);

    img.style.width = `${randomWidth}px`;
    img.style.height = `${randomHeight}px`;
    //img.style.objectFit = "cover"; // Ensure the image covers the entire div

    // Append the img element to the randomDiv
    randomDiv.appendChild(img);

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
    mainDiv.style.backgroundColor = "#3d3d3d";
    body.appendChild(mainDiv);

    addRandomDiv(0, 0, maxHeight, maxWidth, 1);
  };

  fillPageWithRandomDivs();
};
