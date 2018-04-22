import React, {Component} from 'react';
import { View, 
		 ScrollView,
		 WebView,
		 Text,
		 ActivityIndicator } from 'react-native';

import {dataPromise} from './data.js';
import PostTab from './postTab.js';
import {styles} from './styler.js';

export default class HackerNewsApp extends Component {
	constructor(props) {
		super(props);
		this.state = {didLoad: false, wasError: false}
	}

	componentDidMount() {
		dataPromise()
		.then((hits) => {this.setState({data: hits, didLoad: true})})
		.catch((error) => {this.setState({wasError: true})})
	}

	render() {
		if (!this.state.didLoad){
			return (
					<ActivityIndicator/>
				);
			}

		if (this.state.wasError) {
			return (
					<Text>Connection Error</Text>
				);
		}

		return (
				<View style={styles.container}>
					<ScrollView
					 style={styles.scrollContent}
					 showsHorizontalScrollIndicator={false}
          			 showsVerticalScrollIndicator={false}
					>
					 {this.state.data.map((item, index) => <PostTab
					 								url={item.url}
					 								hits={item.hits}
					 								title={item.title}
					 								navigation={this.props.navigation}
					 								key={index}/>)}
					</ScrollView>
				</View>
			);
	}
}


export class DetailsPage extends Component {
	render() {
		const { params } = this.props.navigation.state;
		return (
				<WebView
				source={{uri: params.linkUrl}}
				style={{marginTop:20}}
				/>
			);
	}
}


