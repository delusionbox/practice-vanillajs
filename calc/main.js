let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('.number'));

buttons.map((btn) => {
	btn.addEventListener('click', (e)=>{
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