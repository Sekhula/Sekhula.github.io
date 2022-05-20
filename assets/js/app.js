// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


function find_string()
{
  int count = 0;
  string status = "false";

  for(int x = 0; x < str.Length; x++)
  {
    if (str[x] == 'x')
    {
      count++;
    }
    else{
      count--;
    }
  }

  if(count == 0)
  {
    status = "true";
  }
  else{
    status = false
  }

  return status;
}

public static double Factorial(int number)    
{    
    if (num == 0)    
        return 1;    
    return number * RecursionChallenge(num-1);   
}
