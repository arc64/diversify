var cool;

var MainComponent = React.createClass({
	getInitialState: function() {
		return({companies: [], current_tag: null})
	},

	componentDidMount: function() {
		$.get('/companies.json').done(function(data) {
			this.setState({companies: data});
		}.bind(this));
	},

	setCurrentTag: function(tag) {
		this.setState({tag: tag});
	},

	render: function() {
		if (!this.state.current_tag) {
			render_companies = this.state.companies;
		}
		else {
			render_companies = this.state.companies.filter( function(company){
				return (company.tags.indexOf(this.state.current_tag) > -1)
			}.bind(this))
		}
		cool = render_companies
		var companyNodes = render_companies.map(function (company) {
      return (
        <CompanyComponent company={company} />
      );
    }.bind(this));
    return <div className="row">
    	{companyNodes}
    </div>
	}
});