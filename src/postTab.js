import React, {Component} from 'react';

import { Card, 
		 CardItem, 
		 Text, 
		 Body, 
		 Left} from "native-base";

export default class PostTab extends Component {
  render() {
    return (
          <Card>
            <CardItem
            bordered
            button
            onPress={() => this.props.navigation.navigate('Details', {linkUrl: this.props.url})}
            >
              <Body>
                <Text>
                  {this.props.title}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
              	<Text>{this.props.hits} Upvotes</Text>
              </Left>
            </CardItem>
          </Card>
    );
  }
}