window.addEventListener('load', function(e){
	console.log('script.js loaded');
	init();
})

function init(){
	console.log('in init');
	loadAllTrails();
	
}

function loadAllTrails(){
	//XHR stuff
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/showall');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4) {
			if(xhr.status === 200){
				let trailList = JSON.parse(xhr.responseText);
				displayTrailList(trailList);
			}
		}
	};
	xhr.send();
}

function displayTrailList(trailList){
	//DOM stuff
	let tbody = document.getElementById('trailListTbody');
	tbody.textContent = '';
	for (let trails of trailList){
		let tr = document.createElement('tr');
		tbody.appendChild(tr);	
		let td = document.createElement('td');
		td.textContent = trails.id;
		tr.appendChild(td);		
		td = document.createElement('td');
		td.textContent = trails.name;
		tr.appendChild(td);		
		td = document.createElement('td');
		td.textContent = trails.description;
		tr.appendChild(td);		
		td = document.createElement('td');
		td.textContent = trails.trailLength;
		tr.appendChild(td);		
		td = document.createElement('td');
		td.textContent = trails.elevationGain;
		tr.appendChild(td);		
		td = document.createElement('td');
		td.textContent = trails.routeType;
		tr.appendChild(td);		
		td = document.createElement('td');
		td.textContent = trails.dateHiked;
		tr.appendChild(td);		
		td = document.createElement('td');
		let img = document.createElement('img');
		img.setAttribute('src', trails.imageUrl);
		img.classList.add('trailsImgThumbNail');
		td.appendChild(img);
		tr.appendChild(td);		
	}
}


















