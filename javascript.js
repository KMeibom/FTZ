function checkmember(memberlist, mail) {
	
		var memberlist = [];
	memberlist[0] = "test";
	memberlist[1] = "kaspermeibom@hotmail.com";
	memberlist[2] = "avibavi@line.com";
	
	var mail = document.getElementById("mail").value;
    
	for (var i = 0; i <= memberlist.length; i++) {
        if (memberlist[i] === mail) {
           return alert("user: " + mail +  " already exists!");
        }
    }
    return alert(mail + " doesn't exist");
}