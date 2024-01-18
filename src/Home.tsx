import React from 'react';
import {View, Text} from 'react-native';
import Background from './Background'
import Btn from './Btn'
import Login from './Login'
import Signup from './Signup'
const Home = (props) => {
	return (
    <Background>
		 <View style={{ marginHorizontal: 30, marginVertical: 100 }} >
				<Text style={{color: 'white', fontSize: 64}} >Lets start</Text>
				<Text style={{color: 'white', fontSize: 64, marginBottom: 40, marginBottom: 20}} >Coding</Text>
				<Btn bgColor="#FFA500" textColor="#fff" btnLable="Login" Press={() => props.navigation.navigate("Login") }  />
				<Btn bgColor="#FFA500" textColor="#fff" btnLable="Signup" Press={() => props.navigation.navigate("Signup") } />
		 </View>
		</Background>
  );
}

export default Home;