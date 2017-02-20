
function rotateCWHal() {
	var elem = document.getElementById("hal");
	var halNum = 0;
	var id = setInterval(clockwise,50);
	function clockwise() {
		if (halNum == 23) { 
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
	var halNum = 44;
	var id = setInterval(counterClockwise,40);
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

setInterval(rotateCWHal,5000);
setInterval(rotateCCWHal,10000);