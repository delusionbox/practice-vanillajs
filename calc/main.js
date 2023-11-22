//let display = document.getElementById("numinput");
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('number'));
//const numKey = document.querySelectorAll('.number');
//const operKey = document.querySelectorAll('.oper');
//const currentOperation = null;
/*
numKey.forEach((btn) => {
	btn.onclick =function(btn){
		display.placeholder += btn.target.value;
	}
});
*/
buttons.map((button) => {
	button.addEventListener('click', (e)=>{
		switch(e.target.innerText){
			case 'C':
				display.innerText = '';
				break;
			case '=':
				display.innerText = eval(display.innerText);
				break;
			default:
				display.innerText += e.target.innerText;
		}
	});
});