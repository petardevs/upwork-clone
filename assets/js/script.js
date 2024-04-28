let searchType = document.querySelector(".search-type");
let dropdown = searchType.querySelector(".dropdown-list");

searchType.addEventListener("click", ()=> {
   
   dropdown.classList.toggle("active");
});

/* document.addEventListener("click", (e)=> {
   if(e.target == searchType)
      dropdown.classList.remove("active");
}) */

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
   tab.addEventListener("click", function () {
      // Remove the "active" class from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      // Add the "active" class to the clicked tab
      tab.classList.add("active");
   });
});



const clampedTexts = document.querySelectorAll('.text-clamped');
const clampButtons = document.querySelectorAll('.clamp-more');

clampButtons.forEach((clampButton, index) => {
    clampButton.addEventListener('click', function () {
        const clampedText = clampedTexts[index];
        clampedText.classList.toggle('is-clamped');
        clampedText.classList.toggle('is-expanded');
        if (clampedText.classList.contains('is-clamped')) {
            clampButton.innerText = 'more';
        } else {
            clampButton.innerText = 'less';
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
   const slides = document.querySelectorAll(".slide");
   const progressBars = document.querySelectorAll(".progress-bar");
 
   let currentIndex = 0;
 
   function showSlide(index) {
     slides.forEach((slide, i) => {
       if (i === index) {
         slide.classList.add("active");
         progressBars[i].classList.add("active");
       } else {
         slide.classList.remove("active");
         progressBars[i].classList.remove("active");
       }
     });
   }
 
   function nextSlide() {
     currentIndex = (currentIndex + 1) % slides.length;
     showSlide(currentIndex);
   }
 
   setInterval(nextSlide, 5000);
 });

 




 document.addEventListener("DOMContentLoaded", function() {
   const dropdownBtns = document.querySelectorAll(".dropdownSb-btn");

   dropdownBtns.forEach(btn => {
       btn.addEventListener("click", function() {
           const dropdownContent = this.nextElementSibling;
           dropdownContent.classList.toggle("show");
           // Toggle height based on whether the content is shown or hidden
           if (dropdownContent.classList.contains("show")) {
               dropdownContent.style.height = dropdownContent.scrollHeight + "px";
           } else {
               dropdownContent.style.height = "0";
           }
       });
   });

   // Close dropdowns when clicking outside
   /* window.addEventListener("click", function(event) {
       if (!event.target.matches('.dropdownSb-btn')) {
           const dropdowns = document.querySelectorAll(".dropdownSb-content");
           dropdowns.forEach(dropdown => {
               if (dropdown.classList.contains('show')) {
                   dropdown.classList.remove('show');
                   dropdown.style.height = "0";
               }
           });
       }
   }); */
});



