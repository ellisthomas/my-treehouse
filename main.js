var treeContainer = document.getElementById("treeContainer");

function makeDom(xhrData) {
	var treehouseString = ""
	var currentBadge;
	for (var i = 0; i < xhrData.badges.length; i++) {
		currentBadge = xhrData.badges[i];

	treehouseString += `<div class="col-sm-6 col-md-4">`;
	treehouseString += `<div class="thumbnail">`;
	treehouseString += `<img src="${currentBadge.icon_url}" alt="badge">`;
	treehouseString += `<h3>${currentBadge.name}</h3>`;
	treehouseString += `</div></div>`;
  
}
		treeContainer.innerHTML = treehouseString;
}


function executeThisCodeAfterFileLoaded() {
	var data = JSON.parse(this.responseText)
	console.log("Data returned", data);
	makeDom(data);
}

function executeThisCodeAfterFileFails(){
	
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/ellisthomas.json")
myRequest.send();