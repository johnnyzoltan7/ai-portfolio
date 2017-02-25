function rotateCWHal() {
	var elem = document.getElementById("hal");
	var halNum = 0;
	var id = setInterval(clockwise,25);
	function clockwise() {
		if (halNum == 34) { 
			clearInterval(id);
		}
		else {
			elem.src="./img/hal/hal" + (halNum%11)+ ".png";
			halNum++;
		}
	}
}

function rotateCCWHal() {
	var elem = document.getElementById("hal");
	var halNum = 55;
	var id = setInterval(counterClockwise,15);
	function counterClockwise() {
		if (halNum == -1) { 
			clearInterval(id);
		}
		else {
			elem.src="./img/hal/hal" + (halNum%11)+ ".png";
			halNum--;
		}
	}
}