document.addEventListener("DOMContentLoaded", function() {
    let backToTopButton = document.querySelector(".top");

    window.addEventListener("scroll", function() {
        // Calculate the scroll position
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        // Set the display property of the button based on the scroll position
        if (scrollPosition > window.innerHeight* 1/8) {
            backToTopButton.classList.add('visible')
        } else {
            backToTopButton.classList.remove('visible')
        }
    });
});


const scroll = document.querySelectorAll('.scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("scroll-effect", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  threshold: .25,

})

scroll.forEach(img => {
  observer.observe(img)
})


// let button=document.querySelector('.page-link');

// button.addEventListener('click',(e)=>{
// e.preventDefault()
// })


  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) { // Adjust the scroll threshold as needed
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

