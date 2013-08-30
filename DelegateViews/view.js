var sampleView = Backbone.View.extend({
 		
 	initialize: function(){
 		this.render();
 	},
 	
 	render: function(){
 	this.calls1 = new anotherView({el: this.el});
 	this.calls2 = new anotherView2({el: this.el});
 	this.calls3 = new anotherView3({el: this.el});
 	},



});

var anotherView = Backbone.View.extend({

	anotherVfunc: function(){
		alert('Read text on page before clicking ok');
		
	}
});


var anotherView2 = Backbone.View.extend({

	anotherVfunc: function(){
		alert('Hello I am alert of anotherView2');
		this.$el.html('This text was changed by anotherView2');
	}
});


var anotherView3 = Backbone.View.extend({

	anotherVfunc: function(){
		alert('I am the final alert');
		this.$el.html('text changed thanks to delegation to anotherView3 by passing the this.$el');
	}
});

