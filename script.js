document.addEventListener('DOMContentLoaded', function () {

	//Alaways start from top
	window.scrollTo(0, 0);

	//Header scroll
	const header = document.getElementById('header');  
	window.addEventListener('scroll', function () {
	  if (window.scrollY > 0) {
		header.classList.add('scrolled-header');
	  } else {
		header.classList.remove('scrolled-header');
	  }
	});

	// Smooth scroll effect for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			// document.querySelector(this.getAttribute('href')).scrollIntoView({
			// 	behavior: 'smooth'
			// });
			alert("Page Under Construction.\nCome Back Later.\n\nLast Updated : Dec-12-23")
		});
	});



});
  