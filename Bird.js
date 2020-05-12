import React, { Component } from "react";
import { View,Image } from "react-native";

export default class Bird extends Component {
    render() {
        const width = this.props.size[0];
        const height = this.props.size[1];
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;

        return (
            <View>
            <View
                style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: width,
                    height: height,
                    backgroundColor: this.props.color,
                    // Image: require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/RNGame/dev.jpeg')
                }} />
                <Image source = {require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/RNGame/dev.jpg')} style = {{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: width,
                    height: height,
                    backgroundColor: this.props.color,
                    // Image: require('D:/games/[FreeCourseLab.com] Udemy - React Native - The Practical Guide/RNGame/dev.jpeg')
                }} />
            </View>
    );
  }
}