// Question 1
const cat = {
  complain: function () {
    console.log("meow");
  },
};

cat.complain();

// Question 2
var heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subHeading");

// Question 5
const paragraph = document.querySelectorAll("p");
for (var i = 0; i < paragraph.length; i++) {
  paragraph[i].style.color = "red";
}

// Question 6
var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function nameList(list) {
  for (i = 0; i < list.length; i++) {
    let catNames = list[i].name;
    console.log(catNames);
  }
}

nameList(cats);

// Question 8

function createCats(cats) {
  let catsList = "";

  for (let i = 0; i < cats.length; i++) {
    let catsAge = "Age unknown";
    if (cats[i].age) {
      catsAge = cats[i].age;
    }

    catsList += `<div class="cat-container">
        <h5>${cats[i].name}</h5>
        <p>${catsAge}</p>
        </div>`;
  }
  return catsList;
}

const createHtml = createCats(cats);

const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = createHtml;
