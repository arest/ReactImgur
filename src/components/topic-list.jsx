var React = require('react');
var Reflux = require('reflux');
var TopicsStore = require('../stores/topics-store');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');

module.exports = React.createClass({
	mixins: [
        Reflux.listenTo(TopicsStore,'onChange')
    ],
	getInitialState: function() {
		return {
			topics: []
		}
	},
	componentWillMount: function() {
        Actions.getTopics();
    },
	render: function() {
		return <div className="list-group">
			{this.renderTopics()}
		</div>
	},
	renderTopics: function() {
		return this.state.topics.slice(0,20).map(function(topic) {
			return <Link to={"/topics/"+topic.id} className="list-group-item" key={topic.id}>
				<h4 className="list-group-item-heading">{topic.name}</h4>
				<p className="list-group-item-text">{topic.description}</p>
			</Link>
		});
	},
	onChange: function(event,topics) {
		this.setState({
			topics:topics
		});
	}
});