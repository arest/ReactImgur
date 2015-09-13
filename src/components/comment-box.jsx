var React = require('React');

module.exports = React.createClass({
	render: function() {
		return <ul>
			{this.renderContent()}
		</ul>
	},
	renderContent: function() {
		return this.props.comments.slice(0,10).map(function(comment) {
			return <li>
				{comment.comment}
			</li>
		});
	}
});