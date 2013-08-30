var GeneralView = Backbone.View.extend({
	
	el: '#text',
	//model: TeamModel,
	
	initialize:function(){
		this.render();
	},	

	template: _.template("First Template and then calling second template:<%= otherTemplate%>"),

	otherTemplate: " Second Template",

	render:function(){

		var html = this.template({
			otherTemplate:this.otherTemplate
			
		});
		this.$el.html(html);

	}
});