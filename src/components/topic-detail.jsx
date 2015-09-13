var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');

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
	render: function() {
		return <div>
			I am a topic eith ID {this.props.params.id}
			{this.renderImages()}
		</div>
	},
	renderImages: function(){
		return this.state.images.slice(0,4).map(function(image) {
			return <Link to={"/images/"+image.id} className="list-group-item" key={image.id}>
				<img src={image.src} />
			</Link>
		});
	},
	onChange: function(event,images) {
		this.setState({
			images:images
		});
	}
});