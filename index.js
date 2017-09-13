import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  Animated,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  constructor(){
    super();
    this.state = {
      toggle: false,
      opacity: new Animated.Value(0),
    }
    this.display = this.display.bind(this);
    this.fade = this.fade.bind(this);
    this.toggleValue = this.toggleValue.bind(this);
  }
  componentDidMount(){
    
  }
  display(){
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 200,
      }
    ).start()
  }
  fade(){
    Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
        duration: 200,
      }
    ).start()
  }
  toggleValue(){
    const { toggle } = this.state;
    toggle ? this.fade() : this.display()
    this.setState({ toggle: !toggle})
  }
  render() {
    const { opacity } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleValue} style={styles.item}>
          <View style={styles.cut} />
          <Animated.View style={[styles.tick1, { opacity }]} />
          <Animated.View style={[styles.tick2, { opacity }]} />
        </TouchableOpacity>
      </View>
    )
  }
}

const unit = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 3 * unit,
    height: 3 * unit,
    borderWidth: 3,
    borderColor: 'red',
  },
  cut: {
    position: 'relative',
    width: 2 * unit,
    height: 2 * unit,
    borderRadius: 2 * unit,
    backgroundColor: '#fff',
    left: unit,
    bottom: unit,
  },
  tick1: {
    borderColor: 'black',
    width: (3 * unit)/2 ,
    transform: [{ rotate: '45deg'}],
    bottom: unit,
    borderWidth: 2,
  },
  tick2: {
    borderColor: 'black',
    transform: [{ rotate: '130deg'}],
    bottom: 2 * unit,
    left: unit / 2,
    width: 3 * unit,
    borderWidth: 2,    
  }
})

AppRegistry.registerComponent('places', () => App);
