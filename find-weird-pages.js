alert("searches for weird pages from the current page (ex: login pages, redirect pages, etc.)");

javascript:window.location.href="https://www.google.com/search?q=site:"+window.location.hostname+" -inurl:https"		
