document.getElementById('btn1').onclick=numb;
function numb () {
	var a=document.getElementById('inp1').value;
	var b=document.getElementById('inp2').value;
	if (a>b) {
			console.log(a);
	}
	else {
		console.log(b)
	}
}

document.getElementById('btn2').onclick=number;
function number () {
	var c=document.getElementById('inp3').value;
	var d=document.getElementById('inp4').value;
	if (c>d) {
			console.log(c);
	}
	else if (c==d) {
		console.log('Равные числа')
	}
	else {
		console.log(d)
	}
}

document.getElementById('btn3').onclick=kvar;
function kvar () {
	var e=document.getElementById('inp5').value;
	if (e>=1 && e<=20) {
		console.log('Первый подьезд')
	}
	else if (e>=21 && e<=64)
		console.log('Второй подьезд')
	else if (e>=65 && e<=80)
		console.log('Третий подьезд')
	else {
		console.log('Нет такой квартиры')
	}
}

document.getElementById('btn4').onclick=vouti;
function vouti () {
	var q=document.getElementById('inp6').value;
	var w=document.getElementById('inp7').value;
	var e='ivan';
	var e2=334455;
	var t='alex';
	var t2=777;
	var y='petr';
	var y2='b5678';
	if (q==e && w==e2) {
		console.log('Добро пожаловать')
	}
	else if (q==t && w==t2) {
		console.log('Добро пожаловать')
	}
	else if (q==y && w==y2) {
		console.log('Добро пожаловать')
	}
	else {
		console.log('Ошибка входа')
	}	
}


document.getElementById('btn5').onclick=years;
function years(){
	var f=document.getElementById('inp8').value; 
		f=parseInt(f); 
	var g;
	if (f>1000 && f<=2001) {
			g=2017-f;
			document.getElementById('par1').innerHTML=g;
			console.log('Добро пожаловать')
	}
	else {
			g=2017-f;
			document.getElementById('par1').innerHTML=g;
			console.log('Вход воспрещен')
	}
}	

document.getElementById('btn6').onclick=stag;
function stag () {
	var h=document.getElementById('inp9').value;
		h=parseInt(h);
	if (h>0 && h<3) {
		console.log('нет надбавки, потому что стаж меньше 3х лет')
	}	
	else if (h>=3 && h<=10) {
		console.log('Надбавка за стаж 10%');
	}
	else if (h>=10 && h<=20) {
		console.log('Надбавка за стаж 20%');
	}
	else if (h<=0) {
		console.log('Ошибка')
	}
	else {
		console.log('Надбавка за стаж 30%');
	}
}