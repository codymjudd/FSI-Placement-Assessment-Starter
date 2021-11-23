// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Cody Judd" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = localStorage.getItem('gingersave');
  if (gb===null) {
      gb = 0 
    } else {
        gb = parseInt(gb)
        document.querySelector("#qty-gb").textContent= gb; 

    }

let cc = localStorage.getItem ('ccsave');
if (cc===null) {
    cc = 0 
  } else {
      cc = parseInt(cc)
      document.querySelector("#qty-cc").textContent= cc; 

  }
 
let sugar = localStorage.getItem ('sugarsave'); 
if (sugar===null) {
    sugar = 0 
  } else {
      sugar = parseInt(sugar)
      document.querySelector("#qty-sugar").textContent= sugar; 

  }

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
  gb = gb + 1
  document.querySelector("#qty-gb").textContent= gb; 
  localStorage.setItem ('gingersave', gb);
  document.querySelector("#qty-total").textContent = gb + cc + sugar;
 

})

document.getElementById('minus-gb').addEventListener('click', function() {
    gb = gb - 1
    document.querySelector("#qty-gb").textContent= gb;
    document.querySelector("#qty-total").textContent = gb + cc + sugar; 
    localStorage.setItem ('gingersave', gb);
  })


document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc + 1
    document.querySelector("#qty-cc").textContent= cc; 
    document.querySelector("#qty-total").textContent = gb + cc + sugar;
    localStorage.setItem ('ccsave', cc)
  })
  
document.getElementById('minus-cc').addEventListener('click', function() {
      cc = cc - 1
      document.querySelector("#qty-cc").textContent= cc; 
      document.querySelector("#qty-total").textContent = gb + cc + sugar;
      localStorage.setItem ('ccsave', cc)
    })

document.getElementById('add-sugar').addEventListener('click', function() {
        sugar = sugar + 1
        document.querySelector("#qty-sugar").textContent= sugar; 
        document.querySelector("#qty-total").textContent = gb + cc + sugar;
        localStorage.setItem ('sugarsave', sugar)
      })
      
document.getElementById('minus-sugar').addEventListener('click', function() {
          sugar = sugar - 1
          document.querySelector("#qty-sugar").textContent= sugar; 
          document.querySelector("#qty-total").textContent = gb + cc + sugar;
          localStorage.setItem ('sugarsave', sugar)
        })


        
      
    
  





// TODO: Hook up event listeners for the rest of the buttons