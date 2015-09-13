var React = require('react');

var Header = require('./header');
var TopicList = require('./topic-list');

module.exports = React.createClass({
  componentsHasMount: function() {
  	this.setState({
  		topics: []
  	})
  },
  getChildren: function() {
  	if (this.props.children)
  		return this.props.children;
	else return <TopicList />
  },
  render: function() {
    return <div>
    	<Header />
      	{this.getChildren()}
    </div>
  }
});