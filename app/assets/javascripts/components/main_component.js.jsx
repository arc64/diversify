var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var MainComponent = React.createClass({
	getInitialState: function() {
		return({companies: [], current_tag: null, possible_tags: []})
	},

	componentDidMount: function() {
		$.get('/companies.json').done(function(data) {
			new_companies = data.map(function (company) {
				co = company
				co.tags = co.tags.map(function(tag) {
					return (tag.name);
				})
      	return (co);
      });
			this.setState({companies: new_companies});
		}.bind(this));
		$.get('/tags.json').done(function(data) {
			tags = data.map(function (tag) {
      	return (tag.name);
      });
			this.setState({possible_tags: tags});
		}.bind(this));
	},

	setCurrentTag: function(tag) {
		this.setState({current_tag: tag});
	},

	render: function() {
		if (this.state.current_tag == null) {
			render_companies = this.state.companies;
		}
		else {
			render_companies = this.state.companies.filter(function(company) {
				return (company.tags.indexOf(this.state.current_tag) > -1)
			}.bind(this))
		}
		var companyNodes = $.map(render_companies, function (company, index) {
      return (
        <CompanyComponent company={company} key={"company".concat(index)}/>
      );
    }.bind(this));
    return <div className="row">
    	<div className="row">
    		<TagSelector tags={this.state.possible_tags} setTag={this.setCurrentTag}/>
    	</div>
    	<div className="row">
    		<ReactCSSTransitionGroup transitionName="example">
    			{companyNodes}
    		</ReactCSSTransitionGroup>
    	</div>
    </div>
	}
});