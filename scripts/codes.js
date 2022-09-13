window.onscroll=function()
{scrollFunction()};

function scrollFunction(){
	if (document.body.scrollTop > 10) ||
	document.documentElement.scrollTop > 10 {
		document.getElementById("header-area-logo").style.display="none";
		document.getElementById("logo-small").style.display="inline-block";
	} else {
		document.getElementById("header-area-logo").style.display="block";
		document.getElementById("logo-small").style.display="none";	
	}
} 



