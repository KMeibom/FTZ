function checkmember() {
var memberlist = [];
	memberlist[0] = "c.s.hoepner@gmail.com";
	memberlist[1] = "kaspermeibom@hotmail.com";
	memberlist[2] = "avibavi@line.com";
	var mail=document.getElementById("mail").value;

	for (var i = 0; i <= memberlist.length; i++) {
        if (memberlist[i] == mail) {
           return alert(mail + " allerede oprettet");
        }
    }
	memberlist.push(mail);
    return alert(mail + " er nu oprettet");
}
