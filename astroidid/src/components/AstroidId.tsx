/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
interface IProps {
  navigation?: any;
  route?: any;
}
interface IState {}
export class AstroidId extends Component<IProps, IState> {
  render() {
    const values = this.props.route.params;
    return (
      <View style={styles.mainCrad}>
        <Text style={styles.textHead}>Astroid ID Details</Text>
        <View
          style={{
            height: 300,
            width: '90%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#e88009',
            alignSelf: 'center',
            borderRadius: 9,
            flexDirection: 'column',
            padding: 12,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '700',
              paddingBottom: 5,
            }}>
            Name :
            <Text style={{color: '#3A3B3C', fontSize: 18, fontWeight: '500'}}>
              {' '}
              {values.name}
            </Text>
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '700',
              paddingBottom: 5,
            }}>
            URL :{' '}
            <Text style={{color: '#3A3B3C', fontSize: 18, fontWeight: '500'}}>
              {values.url}
            </Text>
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '700',
              paddingBottom: 5,
            }}>
            Is hazardious :{' '}
            <Text style={{color: '#3A3B3C', fontSize: 18, fontWeight: '500'}}>
              {values.isPotential !== ''
                ? JSON.stringify(values.isPotential)
                : ''}
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
          style={{
            backgroundColor: '#2B54',
            height: 40,
            width: 240,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCrad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHead: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
export default AstroidId;
