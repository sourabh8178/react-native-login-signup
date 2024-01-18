import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background'
import Field from './Field'
import Btn from './Btn'

const Signup = (props) => {
	return(
		<Background>
			<View style={{ alignItems: "center", width: 460, marginVertical: 20 }} >
				<Text style={{ color: "#fff", fontSize: 64, fontWeight: 'bold', marginTop: 20 }} >Register</Text>
				<Text  style={{ color: "#fff", fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Create a new account</Text>
				<View  style={{ backgroundColor: "#fff", height: "500%", width: 460, borderTopLeftRadius: 130, paddingTop: 50, alignItems: "center", paddingRight: 16 }} >
					<Field placeholder="First name" keyboadType={"email-address"} />
					<Field placeholder="Last name" keyboadType={"email-address"} />
					<Field placeholder="Email / Username" keyboadType={"email-address"} />
					<Field placeholder="Contact number" keyboadType={"number"} />
					<Field placeholder="Password" secureTextEntry={true}/>
					<Field placeholder="Conform Password" secureTextEntry={true}/>
					<View style={{justifyContent: "center", display: "flex", flexDirection: "row", width: "78%", paddingRight: 16 }} >
						<Text style={{ color: "#8a8d8f", fontWeight: "bold", fontSize:16 }} >By signing in , you agree to our </Text>
						<Text style={{ color: "#4d0000", fontWeight: "bold", fontSize:16 }} >Terms & Conditions </Text>
					</View>
					<View style={{justifyContent: "center", display: "flex", flexDirection: "row", width: "78%", paddingRight: 16 }} >
						<Text style={{ color: "#8a8d8f", fontWeight: "bold", fontSize:16 }} >and {""} </Text>
						<Text style={{ color: "#4d0000", fontWeight: "bold", fontSize:16 }} > Privacy Policy </Text>
					</View>
					<Btn bgColor="#4d0000" textColor="#fff" btnLable="Signup"  press={()=> {
						alert ("Account Created")
						props.navigation.navigate("Login")
					}} />
					<View  style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
						<Text style={{fontWeight: "bold", fontSize: 16}}>Already have an account ?</Text>
						<TouchableOpacity onPress={() => props.navigation.navigate("Login") } >
						 <Text style={{ color: "#4d0000", fontWeight: "bold", fontSize: 16 }} >Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Background>
	);
}

export default Signup;