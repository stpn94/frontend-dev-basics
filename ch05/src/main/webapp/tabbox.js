var tabBox = {
	init: function() {
		
		window.addEventListener("load", this.onWindowLoad.bind(this));
	},
	onWindowLoad: function() {
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		var liTabs = ul.getElementsByTagName("li");
		
		console.log(this);		
		for(var i = 0; i < liTabs.length; i++){
			liTabs[i].addEventListener("click", this.onTabClicked);
		}
	},
	onTabClicked: function() {
		// unselected
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length == 1) && (lisSelected[0].className = "");
		
		// selected
		this.className = "selected";
	}	
}