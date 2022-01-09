//17x7 matrica
let minLeft = 100;
let maxLeft = 1800;
let minTop = 100;
let maxTop = 800;
let targets = [];
function generateRandomPosition() {
	while(true) {
		x = Math.floor(Math.random() * 17);
		y = Math.floor(Math.random() * 7);
		let shouldBreak = true;
		for(let i = 0; i < targets.length; ++i) {
			if(targets[i].x == x && targets[i].y == y) {
				shouldBreak = false;
				break;
			}
		}
		if (shouldBreak) {
			break;
		}
	}
	return {x, y}
}

function drawTarget(targetIndex, x, y) {
	let divPlayground = document.getElementById('playground');
	let divTarget = document.createElement('div');
	divTarget.classList.add('circle-target');
	divTarget.style.left = ((x+1)*100) + 'px';
	divTarget.style.top = ((y+1)*100) + 'px';
	divTarget.onclick = function() {
		divTarget.remove();
		targets.splice(targetIndex, 1);
		targets.push(generateRandomPosition());
		drawTargets();
	}
	divPlayground.appendChild(divTarget);
}

function drawTargets() {
	if (document.contains(document.getElementById("playground"))) {
		document.getElementById("playground").remove();
	}
	let divPlayground = document.createElement('div');
	divPlayground.setAttribute('id', 'playground');
	document.body.appendChild(divPlayground);
	
	drawTarget(0, targets[0].x, targets[0].y);
	drawTarget(1, targets[1].x, targets[1].y);
	drawTarget(2, targets[2].x, targets[2].y);
}

targets.push(generateRandomPosition());
targets.push(generateRandomPosition());
targets.push(generateRandomPosition());

drawTargets();