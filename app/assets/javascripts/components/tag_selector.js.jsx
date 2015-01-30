var TagSelector = React.createClass({
	render: function() {
		var tagNodes = this.props.tags.map(function (tag) {
      return (
      	<button onClick={this.props.setTag.bind(null, tag)}>{tag}</button>
      );
    }.bind(this));
		return <div>
			{tagNodes}
			</div>
	}
});