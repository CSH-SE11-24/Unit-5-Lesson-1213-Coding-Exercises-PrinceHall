console.log("Script running")
// CODE ALONG
// Use querySelectorAll to select all the buttons

let buttons = document.querySelectorAll("button")

// Use a for loop to console log each of the buttons in the array

for(let i = 0; i < buttons.length; i++){
  console.log(buttons[i])
}



// Use getElementsByClassName to select all the p tags under the buttons

let p = document.getElementsByClassName("color")

// Console log the length of the array to confirm you have all ten elements

console.log(p.length)

// Add an event listener to the first button (red), such that when you click it, all the p tags turn red

buttons[0].addEventListener("click", function(event){
  for(let a = 0; a < p.length; a++){
    p[a].style.color = "red"
  }
})


// LESSON 12 CODING EXERCISES
// Task 1
// Set up similar event listeners for the green and blue buttons

buttons[1].addEventListener("click", function(event){
  for(let a = 0; a < p.length; a++){
    p[a].style.color = "green"
  }
})

buttons[2].addEventListener("click", function(event){
  for(let a = 0; a < p.length; a++){
    p[a].style.color = "blue"
  }
})



// Task 2
// Select the skunk button

let skunk = document.querySelector("#skunk")

// Use querySelectorAll to select all the images

let images = document.querySelectorAll("img")

// Add an event listener to the skunk button such that when you click it, all the images become skunk.webp

skunk.addEventListener("click", function(event){
  for(let a = 0; a < images.length; a++){
    images[a].src = "skunk.webp"
  }
})

// LESSON 13 CODING EXERCISES
// Task 1 
// Write a for loop that goes through every image

for(let i = 0; i<images.length;i++){
  images[i].addEventListener("mouseover", function(event){
      console.log("hello")
      images[i].style.width = "45%"
  })

  images[i].addEventListener("mouseout", function(event){
    console.log("hello")
      images[i].style.width = "40%"
  })
}


// In the for loop, add an event listener to each image such that when the mouse is over it, the width goes to 110%



// In the same for loop, add an event listener to each image such that when the mouse moves off it, the width goes back to 100%



// Task 2
// Set up the DOM manipulation flow such that when you click any of the p tags, the font family changes to "Indie Flower", cursive;

let allp = document.querySelectorAll("p")

console.log(allp[0])

for(let k = 0; k<allp.length;k++){
  allp[k].addEventListener("click", function(event){
    allp[k].style.fontFamily = "Indie Flower, cursive"
  })
}



// Task 3
// Set up the DOM manipulation flow such that when move your mouse over any of the buttons, the background color changes to black and the text color changes to white. It should change back to normal when you move your mouse off it.

for(let n = 0; n<buttons.length;n++){
    buttons[n].addEventListener("mouseover", function(event){
    buttons[n].style.backgroundColor = "black"
    buttons[n].style.color = "white"
  })

  buttons[n].addEventListener("mouseout", function(event){
    buttons[n].style.backgroundColor = "white"
    buttons[n].style.color = "black"
  })
}


// Task 4 (Stretch)
// Re-write the code along/Task 1 code to have just 1 event listener for all 3 buttons to work correctly
// Hint: you may need to use an array to store colors to match buttons



