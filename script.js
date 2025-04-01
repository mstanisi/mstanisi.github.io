let aboutButton = document.getElementById("aboutButton")
let homeButton = document.getElementById("nameButton")
let portfolio = document.getElementById("portfolio")
let aboutPage = document.getElementById("about")

aboutButton.addEventListener("click", function(){
  portfolio.style.display = "none"
  aboutPage.style.display = "block"
})
homeButton.addEventListener("click", function(){
  portfolio.style.display = "block"
  aboutPage.style.display = "none"
})

//Expanding images

let projects = document.querySelectorAll("div.projects")

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('details').forEach(details => {
    const project = details.closest('.projects');
    const expandImages = project.querySelectorAll('.expand');
    
    // Initialize all expand images as hidden
    expandImages.forEach(img => {
      img.style.display = 'none';
    });
    
    // Toggle visibility when details is opened/closed
    details.addEventListener('toggle', function() {
      expandImages.forEach(img => {
        img.style.display = this.open ? 'block' : 'none';
      });
    });
  });
});