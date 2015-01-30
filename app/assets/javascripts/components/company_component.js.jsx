var CompanyComponent = React.createClass({
	render: function() {
		return <div className="large-4 columns end">
			<img src={this.props.company.image_url} />
			<h4>{this.props.company.name}</h4>
			<p>{this.props.company.domain}</p>
		</div>
	}
});