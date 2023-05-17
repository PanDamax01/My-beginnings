const result = document.querySelector('.result')
const newResult = document.querySelector('.newResult')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

let $score
const add = (num1, num2) => {
	$score = num1 + num2
	result.innerText = $score
}
add(20, 3)                     //change numbers

btn1.addEventListener('click', function () {
	$score *= 2
	newResult.innerText = $score
})
btn2.addEventListener('click', function () {
	$score /= 2
	newResult.innerText = $score
})
