var TableView = Backbone.View.extend({

	render: function(){
		var self = this, 
		tableEl = $('<table><thead><tr><th>Player Name</th><th>Team</th></tr></thead></table>'),
	    tbodyEl = $('<tbody />');

	    tableEl.append(tbodyEl);

	    this.rowViews = {};

	    this.model.get('team').each(function(model, index, collection){

	    var rowView = new TableRowView({
	    	el: $('<tr />'), 
	    	model: model
	    });//other subview

	    rowView.render();

	    tbodyEl.append(rowView.$el);
	    self.rowViews[model.id] = rowView;
	    });
	    this.$el.append(tableEl.children());	
	}
});

//second subview.

var TableRowView = Backbone.View.extend({

	events: {
		'click td' : 'blockClick'
	},

	render: function(){

		this.$el.data('id', this.model.id)
		.append($('<td />').text(this.model.get('playerName')))
        .append($('<td />').text(this.model.get('teamName')));

	},

	blockClick: function(){
		alert('This player is: ' + this.model.get('playerName') + ' from team: ' + this.model.get('teamName'));
	}
});