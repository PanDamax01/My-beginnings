const nav = document.querySelector('nav')
const burgerBtn = document.querySelector('.burger')
const simpleIcon = document.querySelector('.fa-bars')
const crossIcon = document.querySelector('.fa-times')

//remember, reduce code as short as much as possible
const swap = () => {
	nav.classList.toggle('active')
	burgerBtn.classList.toggle('active')

	if (nav.classList.contains('active')) {
		simpleIcon.classList.add('hide')
		crossIcon.classList.remove('hide')
	} else {
		simpleIcon.classList.remove('hide')
		crossIcon.classList.add('hide')
	}
}

burgerBtn.addEventListener('click', swap)
