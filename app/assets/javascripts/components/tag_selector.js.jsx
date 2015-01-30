var TagSelector = React.createClass({
	render: function() {
		var tagNodes = this.props.tags.map(function (tag) {
      return (
      	<button onClick={this.props.setTag.bind(null, tag)}>{tag}</button>
      );
    }.bind(this));
    tagNodes.unshift(<button onClick={this.props.setTag.bind(null, null)}>All Companies</button>)
		return <div>
			{tagNodes}
			</div>
	}
});