var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
	mixins: [
        Reflux.listenTo(ImageStore,'onChange')
    ],
	getInitialState: function() {
		return {
			images: []
		}
	},
	componentWillMount: function() {
        Actions.getImages(this.props.params.id);
    },
    componentWillReceiveProps: function(nextProps) {
		Actions.getImages(nextProps.params.id);
    },
	render: function() {
		return <div className="row topic">
			{this.renderImages()}
		</div>
	},
	renderImages: function(){

		return this.state.images.map(function(image,index) {
			return <div className="col-xs-6 col-md-3" key={image.id}>
				<div className="image-preview">
					<ImagePreview {...image} />
				</div>
			</div>
		});
	},
	onChange: function(event,images) {
		this.setState({
			images:images
		});
	}
});