var CompanyComponent = React.createClass({
	render: function() {
		return <div className="large-4 columns">
			<img src={this.props.company.image_url} />
			<p>{this.props.company.name}</p>
		</div>
	}
});