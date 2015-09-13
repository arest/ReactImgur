var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
	listenables: [Actions],
	getImage: function(imageId) {
		return Api.get('gallery/'+imageId+'/comments')
			.then(function(json){
				this.comment = json.data;
				this.triggerChange();
			}.bind(this));
	},
	triggerChange:function() {
		this.trigger('change',this.comment);
	}
});