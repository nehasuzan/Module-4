(function () {
	var names = ["Phoebe", "Jerrin", "Monica", "Jimmy", "Susan", "Ross", "Betty", "Janis", "Mathew", "Joey"];
	for (var i = 0; i < names.length; i++) {
		var firstletter = names[i].charAt(0).toLowerCase();
		if (firstletter === 'j') {
			byespeaker(names[i]);
		}
		else {
			hellospeaker(names[i]);
		}
	}
})();