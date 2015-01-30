var MainComponent = React.createClass({
	getInitialState: function() {
		return({companies: [], current_tag: null, possible_tags: []})
	},

	componentDidMount: function() {
		$.get('/companies.json').done(function(data) {
			this.setState({companies: data});
		}.bind(this));
		$.get('/tags.json').done(function(data) {
			tags = data.map(function (tag) {
      	return (tag.name);
      });
			this.setState({possible_tags: tags});
		}.bind(this));
	},

	setCurrentTag: function(tag) {
		this.setState({tag: tag});
	},

	render: function() {
		if (this.state.current_tag == null) {
			render_companies = this.state.companies;
			console.log(render_companies)
			console.log('first')
		}
		else {
			render_companies = this.state.companies.filter( function(company){
				return (company.tags.indexOf(this.state.current_tag) > -1)
			}.bind(this))
			console.log(render_companies)
			console.log('second')
		}
		var companyNodes = render_companies.map(function (company) {
      return (
        <CompanyComponent company={company} />
      );
    }.bind(this));
    return <div className="row">
    	<div className="row">
    		<TagSelector tags={this.state.possible_tags} setTag={this.setCurrentTag}/>
    	</div>
    	<div className="row">
    		{companyNodes}
    	</div>
    </div>
	}
});