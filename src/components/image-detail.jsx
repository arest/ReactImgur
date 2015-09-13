var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');
var Reflux  = require('reflux');
var ImageStore = require('../stores/image-store');
var CommentStore = require('../stores/comment-store');
var CommentBox = require('./comment-box');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(ImageStore,'onChange'),
        Reflux.listenTo(CommentStore,'onChange')
    ],
    getInitialState: function() {
        return {
            image: null,
            comment: null
        }
    },
    componentWillMount: function() {
        Actions.getImage(this.props.params.id)
    },
    render: function() {
        return <div>
            { this.state.image ? this.renderContent() : null}
        </div>
    },
    renderContent: function() {
        return <div className="image-detail">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4>{this.state.image.title}</h4>
                <div className="panel-body">
                        {this.renderImage()}
                </div>
                <div className="panel-footer">
                    {this.state.image.description}
                </div>
            </div>
        </div>
        <h3>Comments</h3>
        {this.renderComment()}
    </div>
    },
    renderImage: function() {
        if (this.state.image.animated) {
            return <video preload='auto' autoPlay="autoplay" loop="loop">
                <source src={this.state.image.mp4} type="video/mp4"></source>
            </video>
        } else {
            return <img src={this.state.image.link} />
        }
    },
    renderComment: function() {
        if (!this.state.comment) {
            return null;
        } else {
            return <CommentBox comments={this.state.comment} />
        }
    },
    onChange: function() {
        this.setState({
            image: ImageStore.find(this.props.params.id),
            comment: CommentStore.comment

        });
    }
});