window.addEventListener('load', function(e){
	console.log('script.js loaded');
	init();
})

function init() {
	/*loadAllTrails();*/
	
	document.trailForm.lookup.addEventListener('click', function(e) {
		e.preventDefault();
		let trailId = document.trailForm.trailId.value;
		console.log(trailId);
		if (!isNaN(trailId) && trailId > 0) {
			getTrail(trailId);
		}
	});
	
	loadAllTrails();
	
	document.logTrailForm.addTrailButton.addEventListener('click', function(evt){
		evt.preventDefault();
		let form = document.logTrailForm;
		let trail = {
			name: form.name.value,
			description: form.description.value,
			trailLength: form.trailLength.value,
			elevationGain: form.elevationGain.value,
			routeType: form.routeType.value,
			imageUrl: form.imageUrl.value,
			location: {
       				 	id: 1,
        				city: "Antioch"}
		};
		console.log(trail); //Debugging
		createTrail(trail);
	});

/*}*/ //int();

function getTrail(trailId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/trail/' + trailId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				let trailJson = xhr.responseText;
				let trail = JSON.parse(trailJson);
				displayTrail(trail);			
			}
			else {
				console.error(xhr.status + ":" + xhr.responseText);
			}

		}

	};
	xhr.send();
}

function displayTrail(trail){
	let dataDiv = document.getElementById('trailData');
	dataDiv.textContent = '';
	
	let h1 = document.createElement('h1');
	h1.textContent = trail.name;
	dataDiv.appendChild(h1);

	let blockquote = document.createElement('blockquote');
	blockquote.textContent = trail.description;
	dataDiv.appendChild(blockquote);

	let ul = document.createElement('ul');

	let lengthLi = document.createElement('li');
	lengthLi.textContent = "Trail Length: " + trail.length;
	ul.appendChild(lengthLi);

	let elevationGainLi = document.createElement('li');
	elevationGainLi.textContent = "Elevation Gain: " + trail.elevationGain;
	ul.appendChild(elevationGainLi);

	let routeTypeLi = document.createElement('li');
	routeTypeLi.textContent = "Route Type: " + trail.routeType;
	ul.appendChild(routeTypeLi);
	
	let imageUrlLi = document.createElement('li');
	imageUrlLi.textContent = "Image Url: " + trail.imageUrl;
	ul.appendChild(imageUrlLi)

	dataDiv.appendChild(ul);
	
}

function loadAllTrails(){
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
	let tbody = document.getElementById('trailListTbody');
	tbody.textContent = '';
	for (let trail of trailList){
		let tr = document.createElement('tr');
		tbody.appendChild(tr);	
		let td = document.createElement('td');
		td.textContent = trail.id;
		tr.appendChild(td);		
		td = document.createElement('td');
		td.textContent = trail.name;
		tr.appendChild(td);		
		td = document.createElement('td');
		td.textContent = trail.description;
		tr.appendChild(td);		
		td = document.createElement('td');
		td.textContent = trail.trailLength;
		tr.appendChild(td);		
		td = document.createElement('td');
		td.textContent = trail.elevationGain;
		tr.appendChild(td);		
		td = document.createElement('td');
		td.textContent = trail.routeType;
		tr.appendChild(td);					
		td = document.createElement('td');
		let img = document.createElement('img');
		img.setAttribute('src', trail.imageUrl);
		img.classList.add('trailsImgThumbNail');		
		td.appendChild(img);
		tr.appendChild(td);		
	}
}

function createTrail(newTrail){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/createtrail', true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let trail = JSON.parse(xhr.responseText);
				console.log(trail);
				displayTrail(); 
			}
			else{
				console.error(xhr.status + ":" + xhr.responseText);
			}
		}
	};
	let newTrailJson = JSON.stringify(newTrail);
	console.log(newTrailJson); //Debugging
	xhr.send(newTrailJson);
}

document.editTrailForm.updateTrailButton.addEventListener('onclick', function(e) {
		e.preventDefault();
		let form = document.editTrailForm;
		console.log(form); //Debugging
		let updatedTrail = {
			name: form.name.value,
			description: form.description.value,
			trailLength: form.trailLength.value,
			elevationGain: form.elevationGain.value,
			routeType: form.routeType.value,
			imageUrl: form.imageUrl.value
		};

		let trailId = form.trailId.value;

		console.log(updatedTrail, trailId); //Debugging
		updateTrail(updatedTrail, trailId);
	});
	
function updateTrail(updatedTrail, trailId) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/updatetrail/' + trailId, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let updatedTrailJson = JSON.parse(xhr.responseText);
				console.log(updatedTrailJson);
				displayTrailList(updatedTrailJson);
			}
			else {
				console.error(xhr.status + ":" + xhr.responseText);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	let updatedTrailJson = JSON.stringify(updatedTrail);
	xhr.send(updatedTrailJson);
	console.log(updatedTrail, trailId); //Debugging
}

document.deleteTrailForm.deleteTrail.addEventListener('click', function(e){
/*	e.preventDefault();*/
	let form = document.deleteTrailForm;
	let trailId = form.trailId.value;
	console.log(trailId); //Debugging
	deleteTrail(trailId);	
});
	
function deleteTrail(trailId) {
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', 'api/deletetrail/' + trailId, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 204) {
        console.log('Trail deleted successfully');
      }
      else {
        console.error(xhr.status + ":" + xhr.responseText);
      }
    }
  }
  xhr.send();
}


} //int();