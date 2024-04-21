/* custom js file made by JeanDoe */

const menuBtn = document.getElementById('menu-btn'),
	  navbar = document.querySelector('.header .navbar'),
	  closeBtn = document.getElementById('close-btn'),
	  header = document.querySelector('.header');

if(menuBtn){
	menuBtn.addEventListener('click', () =>{
		navbar.classList.toggle('active');
	})
};

if(closeBtn){
	closeBtn.addEventListener('click', () =>{
		navbar.classList.remove('active');
	})
};

window.onscroll = () =>{
	navbar.classList.remove('active');
}

window.addEventListener('scroll', () =>{
	header.classList.toggle('active', window.scrollY > 0);
})













