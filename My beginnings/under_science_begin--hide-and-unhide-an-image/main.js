const arrowbtn = document.querySelector('.arrow')
const arrow = document.querySelector('.fas')
const img = document.querySelector('.item1')

arrowbtn.addEventListener('click', function () {
	img.classList.toggle('hide')

	if (img.classList.contains('hide')) {
		arrow.style.transform = 'rotate(180deg)'
		//odwołujemy sie do transform a nie do rotate bo dzięki temu możemy spowolniśc trnsitionem
	} else {
		arrow.style.transform = 'rotate(0)'
	}
})
