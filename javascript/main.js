function swapBG(){
			document.getElementById("bg-img").style.display="block";
			document.getElementById("bg-img").style.backgroundImage="url('../img/landscape.jpg')";
			document.getElementById("bg-overlay").style.display="block";
			document.getElementById("ios").style.color="rgb(0,200,64)";
			document.getElementById("chrome").style.color="rgb(255,91,0)";
			document.body.style.color = "white";
		}
		function swapForURL(){
			document.getElementById("bg-overlay").style.display="block";
			document.getElementById("ios").style.color="rgb(0,200,64)";
			document.getElementById("chrome").style.color="rgb(255,91,0)";
			document.body.style.color = "white";
		}
		function getLocation(href) {
			var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
			return match && {
				protocol: match[1],
				host: match[2],
				hostname: match[3],
				port: match[4],
				pathname: match[5],
				search: match[6],
				hash: match[7]
			}
		}

        function getCookie() {
            var match = document.cookie.match(RegExp('(?:^|;\\s*)' + captchapassed + '=([^;]*)')); 
            return match ? match[1] : null;
            console.log(match)
        }
