/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.header, styles.row]}>
          <View style={[styles.box, styles.center]}>
            <Text style={styles.textColor}>1</Text>
          </View>

          <View style={[styles.box, styles.center]}>
            <Text style={styles.textColor}>2</Text>
          </View>

          <View style={[styles.box, styles.center]}>
            <Text style={styles.textColor}>3</Text>
          </View>
        </View>

        <View style={[styles.content, styles.center]}>
          <Text style={styles.textColor}>Scroll View</Text>
        </View>

        <View style={[styles.footer, styles.row]}>

          <View style={[styles.box, styles.center]}>
            <Text style={styles.textColor}>I</Text>
          </View>

          <View style={[styles.box, styles.center]}>
            <Text style={styles.textColor}>C</Text>
          </View>

          <View style={[styles.box, styles.center]}>
            <Text style={styles.textColor}>O</Text>
          </View>

          <View style={[styles.box, styles.center]}>
            <Text style={styles.textColor}>N</Text>
          </View>

        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  box: {
    backgroundColor: 'green',
    padding: 20,
    flex: 1,
    margin: 1

  },
  header: {
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  content: {
    backgroundColor: 'skyblue',
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    backgroundColor: 'white'
  },
  textColor: {
    color: 'white'
  }


});
