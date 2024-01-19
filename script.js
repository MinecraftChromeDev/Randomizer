const titles = [
  "The real",
  "Very cool nonsense",
  "Javascript if it was actually good ",
  "Awesome sauce!",
  "the world wide web if people didnt exist",
];
const fonts = [
  "Arial",
  "Verdana",
  "Helvetica",
  "Times New Roman",
  "Courier New",
];
const colors = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
];
const paddings = ["10px", "20px", "30px", "40px", "50px"];
const margins = ["10px", "20px", "30px", "40px", "50px"];
const fontSizes = ["12px", "14px", "16px", "18px", "20px"];
const imageWidths = ["200px", "300px", "400px", "500px", "600px"];
const imageHeights = ["200px", "300px", "400px", "500px", "600px"];
const backgroundColors = [
  "#f1f1f1",
  "#e6e6e6",
  "#dcdcdc",
  "#cccccc",
  "#b3b3b3",
];

// Generate a random phrase
function generateRandomPhrase() {
  const subjects = [
    "The cat",
    "A dog",
    "My friend",
    "A car",
    "The book",
    "A bird",
    "The sun",
    "The tree",
    "A flower",
    "The mountain",
  ];
  const verbs = [
    "jumped",
    "ran",
    "slept",
    "ate",
    "played",
    "swam",
    "read",
    "wrote",
    "sang",
    "danced",
  ];
  const objects = [
    "over the fence",
    "in the park",
    "on the beach",
    "under the table",
    "through the woods",
    "across the river",
    "on the moon",
    "in the sky",
    "around the world",
    "into the unknown",
  ];

  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomObject = objects[Math.floor(Math.random() * objects.length)];

  return `${randomSubject} ${randomVerb} ${randomObject}.`;
}

// Generate a random title
function generateTitle() {
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  document.title = randomTitle;
  document.getElementById("header").innerHTML = `<h1>${randomTitle}</h1>`;
}

// Generate random content
function generateContent() {
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  const randomTextBackgroundColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  const randomSectionBackgroundColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  const randomTextColor = colors[Math.floor(Math.random() * colors.length)];
  const randomHeadingColor = colors[Math.floor(Math.random() * colors.length)];
  const randomFontSize =
    fontSizes[Math.floor(Math.random() * fontSizes.length)];
  const randomImageWidth =
    imageWidths[Math.floor(Math.random() * imageWidths.length)];
  const randomImageHeight =
    imageHeights[Math.floor(Math.random() * imageHeights.length)];

  const sections = document.querySelectorAll("header, nav, main, footer");
  sections.forEach((section) => {
    section.style.fontFamily = randomFont;
    section.style.backgroundColor = randomSectionBackgroundColor;
    section.style.color = randomTextColor;
  });

  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  headings.forEach((heading) => {
    heading.style.fontFamily = randomFont;
    heading.style.color = randomHeadingColor;
  });

  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((paragraph) => {
    paragraph.style.fontFamily = randomFont;
    paragraph.style.fontSize = randomFontSize;
    paragraph.style.color = randomTextColor;
    paragraph.innerHTML = generateRandomPhrase();
  });

  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.style.width = randomImageWidth;
    image.style.height = randomImageHeight;
  });

  document.body.style.backgroundColor = randomTextBackgroundColor;
}

// Generate random website
function generateWebsite() {
  generateTitle();
  generateContent();
}

// Generate random website initially
generateWebsite();

// Add event listener to the "Try Again" button
document.getElementById("try-again").addEventListener("click", generateWebsite);

// Why is javascript...