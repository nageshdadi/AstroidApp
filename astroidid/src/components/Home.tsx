/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
//2001627
//2001862
//2001620

const {height} = Dimensions.get('window');
interface IState {
  astreoidId: string;
  name: string;
  url: string;
  isPotential: string;
}

interface IProps {
  navigation?: any;
}

class Home extends Component<IProps, IState> {
  state = {
    astreoidId: '',
    name: '',
    url: '',
    isPotential: '',
  };

  getAstreoidData = async () => {
    console.log(this.state.astreoidId);
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${this.state.astreoidId}?api_key=UizHGsb4dM8SCJwXP08OZEh9jEdqgCTnaj6mfjyo`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(response);
    if (response.ok) {
      // console.log(data);
      this.setState(
        {
          name: data.name,
          url: data.nasa_jpl_url,
          isPotential: data.is_potentially_hazardous_asteroid,
        },
        () => {
          console.log(this.state.astreoidId);

          this.props.navigation.navigate('AstroidId', {
            name: this.state.name,
            url: this.state.url,
            isPotential: this.state.isPotential,
          });
        },
      );
    } else {
      Alert.alert('Error', `${data.error.message}`);
    }
  };

  getRandomAstreoidData = async () => {
    const number = Math.ceil(Math.random() * 10);
    console.log(number);
    const url =
      'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=UizHGsb4dM8SCJwXP08OZEh9jEdqgCTnaj6mfjyo';
    const response = await fetch(url);
    const data = await response.json();
    // console.log(response);
    if (response.ok) {
      // console.log(data);
      this.setState({astreoidId: data.near_earth_objects[number].id});
    } else {
      Alert.alert('Error', `${data.error.message}`);
    }
  };

  render() {
    const {astreoidId} = this.state;
    console.log(astreoidId);
    console.log(this.state.name, this.state.url, this.state.isPotential);
    return (
      <View style={{height: height}}>
        <View style={{height: 60, backgroundColor: '#e87509'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 26,
              paddingTop: 10,
              fontWeight: '800',
            }}>
            Astreoid App
          </Text>
        </View>

        <TextInput
          value={this.state.astreoidId}
          onChangeText={(value: string) => this.setState({astreoidId: value})}
          style={{
            backgroundColor: '#fff',
            borderRadius: 9,
            padding: 10,
            marginTop: 20,
            marginHorizontal: 20,
            marginBottom: 10,
          }}
          placeholder="Enter Astreoid Id"
          placeholderTextColor="#000"
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.getAstreoidData();
              this.setState({astreoidId: ''});
            }}
            disabled={this.state.astreoidId === '' ? true : false}
            style={{
              backgroundColor: '#2B54',
              height: 40,
              width: 120,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 15,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.getRandomAstreoidData()}
            style={{
              backgroundColor: '#2B54',
              height: 40,
              width: 240,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Random Astreoid
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
