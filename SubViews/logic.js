$(document).ready(function() {

var tableView = new TableView({
	el: $('#table-id'),
	model: new Backbone.Model({
		team: new TeamCollection([
			{id:1, playerName:'Kobe Bryant', teamName:'Lakers' },
			{id:2, playerName:'LeBron James', teamName:'Heats' },
			{id:3, playerName:'Kevin Garnet', teamName:'Celtics' }
		])
	})
});

tableView.render();
});




