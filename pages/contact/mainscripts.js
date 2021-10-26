document.getElementById("submitBtn").addEventListener("click", function(event) {
		btnClicked();
});

function btnClicked () {
	var frm = document.getElementById("myForm");
	
	for (var i = 0; i < frm.length; i++) {
		if (frm.elements[i].value == "")
		{
			alert("Fill out everything!");
            event.preventDefault();
		}
	}
	

}