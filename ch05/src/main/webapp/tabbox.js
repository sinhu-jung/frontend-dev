// DOM Level 2 Event 처리: element의 event에 Listener를 등록하는 방식
// 2. JavaScript code(DOM API)로만 작성하기

var tabBox = {
	onTabClicked: function(){},
	init: function(){
		liTabs[i].addEventListener("click", this.onTabClicked);
	},
};

var onTabClicked = function() {
	//unselected
	var lisSelected = document.getElementsByClassName("selected");
	(lisSelected.length == 1) && (lisSelected[0].className = "")
	
	// selected
	this.className = "selected";
};

window.onload = function() {
	var divTabBox = document.getElementsByClassName("tab-box")[0];
	var ul = divTabBox.childNodes[1];
	var liTabs = ul.getElementsByTagName("li");
	
	for(var i = 0; i < liTabs.length; i++){
		liTabs[i].addEventListener("click", onTabClicked);
	}
}