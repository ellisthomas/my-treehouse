function executeThisCodeAfterFileLoaded() {
	var data = JSON.parse(this.responseText)
}

function executeThisCodeAfterFileFails(){
	
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/ellisthomas.json")
myRequest.send();