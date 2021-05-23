/* Adding Event Listener For Buttons | Nizam */
let sortButton = document.getElementById("sort")
let shuffleButton = document.getElementById("shuffle")
sortButton.addEventListener("click", sortNumbers)
shuffleButton.addEventListener("click", shuffleNumbers)

var numarray = [1,2,3,4,5,6,7,8,9];

/* Function to create number container | Nizam */
createContainer = () => {
  var container = document.getElementById("container");
  container.innerHTML = '';
}

/* Function to sort the numbers | Nizam */
sort = () => {
  numarray.sort(function(a, b){return a-b});
  return numarray;
}

/* Function to create grid | Nizam */
createGrid = numarray => {
  let numberOfRows = 3
    let i = 0;
    let x = numberOfRows * numberOfRows;
    document.documentElement.style.setProperty("--columns-row", numberOfRows);
      for (i =  0; i < x ; i++) {
        var div = document.createElement("div");
          div.className = "grid-item";
          div.innerHTML = numarray[i];
          document.getElementById("container").appendChild(div);
    }
}

/* Function to shuffle array | Nizam */
shuffleArray = numarray => {
  for (let i = numarray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numarray[i], numarray[j]] = [numarray[j], numarray[i]];
  }
}

/* Function to call sort and create container grid method | Nizam */
function sortNumbers() {
    createContainer();
    let array = sort();
    createGrid(array);
}

/* Function to call shuffle and create container grid method | Nizam */
function shuffleNumbers() {
  createContainer();
  shuffleArray(numarray);
  createGrid(numarray);
}
