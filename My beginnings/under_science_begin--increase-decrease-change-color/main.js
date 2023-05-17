const sizeUpBtn = document.querySelector('.sizeUp')
const sizeDownBtn = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const text = document.querySelector('p')

let font = 36

const increase = () => {
	font += 5
	text.style.fontSize = font + 'px'
}

sizeUpBtn.addEventListener('click', increase) //interesting

sizeDownBtn.addEventListener('click', function () {
	font -= 5
	text.style.fontSize = font + 'px'
})

colorBtn.addEventListener('click', function () {
	const r = Math.floor(Math.random() * 250)
	const g = Math.floor(Math.random() * 250)
	const b = Math.floor(Math.random() * 250)

	text.style.color = `rgb(${r},${g},${b})`
})
