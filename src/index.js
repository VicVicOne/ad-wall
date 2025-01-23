window.onload = function () {
  const body = document.body;
  body.style.display = "flex";
  body.style.flexWrap = "wrap";
  body.style.height = "100vh";
  body.style.width = "100vw";
  body.style.boxSizing = "border-box";
  body.style.margin = "0";
  body.style.padding = "0";

  const createRandomDiv = () => {
    const randomDiv = document.createElement("div");
    const randomHeight = Math.floor(Math.random() * 200) + 50; // Random height between 50 and 250px
    const randomWidth = Math.floor(Math.random() * 200) + 50; // Random width between 50 and 250px
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Random color

    randomDiv.style.height = `${randomHeight}px`;
    randomDiv.style.width = `${randomWidth}px`;
    randomDiv.style.backgroundColor = randomColor;
    randomDiv.textContent = "Random Div";

    return randomDiv;
  };

  const fillPageWithRandomDivs = () => {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    let totalHeight = 0;
    let totalWidth = 0;

    while (totalHeight < viewportHeight || totalWidth < viewportWidth) {
      const randomDiv = createRandomDiv();
      body.appendChild(randomDiv);
      totalHeight += randomDiv.offsetHeight;
      totalWidth += randomDiv.offsetWidth;
    }

    // Fill remaining space
    while (totalHeight < viewportHeight) {
      const randomDiv = createRandomDiv();
      randomDiv.style.width = `${viewportWidth}px`;
      body.appendChild(randomDiv);
      totalHeight += randomDiv.offsetHeight;
    }

    while (totalWidth < viewportWidth) {
      const randomDiv = createRandomDiv();
      randomDiv.style.height = `${viewportHeight}px`;
      body.appendChild(randomDiv);
      totalWidth += randomDiv.offsetWidth;
    }
  };

  fillPageWithRandomDivs();
};
