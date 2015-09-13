var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return this.renderImage()
  },
  renderImage:function() {
  	var link = 'http://i.imgur.com/'+this.props.id+'h.jpg';
	return <Link to={"/images/" + this.props.id} key={this.props.id}>
		<img src={link} />
	</Link>
  }
});

