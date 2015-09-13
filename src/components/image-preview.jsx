var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  getInitialState: function() {
  	return {
  		hovering: false
  	}
  },
  render: function() {
    return this.renderImage()
  },
  renderImage:function() {
	return <Link 
				to={"/images/" + this.props.id} 
				key={this.props.id}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
			{this.props.animated && this.state.hovering ? this.video() : this.image() }
			{this.props.animated && !this.state.hovering ? this.icon() : null }
			{this.state.hovering ? this.inset() : null }
	</Link>
  },
  video: function() {
  	return <video preload='auto' autoPlay="autoplay" loop="loop">
  		<source src={this.props.mp4} type="video/mp4"></source>
  	</video>
  },
  image: function() {
	var link = 'http://i.imgur.com/'+this.props.id+'h.jpg';
	return <img src={link}  />
  },
  icon: function() {
  	return <span className="glyphicon glyphicon-play"></span>
  },
  inset: function() {
  	return <div className="inset">
  		Views: {this.props.views}<br /> 
  		Upvoted: {this.props.ups}
  	</div>
  },
  handleMouseLeave: function() {
  	this.setState({
  		hovering: false
  	})
  },
  handleMouseEnter: function() {
  	this.setState({
  		hovering: true
  	})
  }
});

