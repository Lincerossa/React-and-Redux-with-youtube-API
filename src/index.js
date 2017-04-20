import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetails from './components/video_details.js';

const API_KEY = 'AIzaSyC_G9bSBhuVQkZ0qROAZSqPzgZnmV6cvpc';

class App extends React.Component{

	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectVideo: null
		};

		this.videoSearch("gravedona");
	}

	videoSearch(term){
		YTSearch(  {key : API_KEY, term : term}, (data) =>{
			this.setState({
				videos:data,
				selectVideo : data[0]
			})
		});
	}

	render(){
		return (
			<div>
        <SearchBar 
          onSearchTermChanged = { term => this.videoSearch(term) }
        />
        <VideoDetails video={this.state.selectVideo} />
        <VideoList 
          videos={ this.state.videos } 
          onVideoSelect= { selectVideo => this.setState({selectVideo})}
        />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("app"));