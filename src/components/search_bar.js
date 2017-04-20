import React from "react";

class SearchBar extends React.Component{

	constructor(props){
    super(props);
		this.state = {term : ''}
	}

	render() {
		return (
			<div>
			  <input 
			    value = {this.state.term}
			    onChange={ event => this.onInputChanged(event.target.value)}
			   />;
			</div>
		)
	}

	onInputChanged(term){
		this.setState({term})
		this.props.onSearchTermChanged(term)
	}

}

export default SearchBar;