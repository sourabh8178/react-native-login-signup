import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background'
import Field from './Field'
import Btn from './Btn'

const Login = (props) => {
	return(
		<Background>
			<View style={{ alignItems: "center", width: 460, marginVertical: 20 }} >
				<Text style={{ color: "#fff", fontSize: 64, fontWeight: 'bold', paddingTop: 80 }} >Login</Text>
				<View  style={{ backgroundColor: "#fff", height: "500%", width: 460, borderTopLeftRadius: 130, paddingTop: 100, alignItems: "center", paddingRight: 16 }} >
					<Text  style={{ fontSize:40, color: "#4d0000", fontWeight: "bold" }} >Welcome Back</Text>
					<Text style={{ fontSize:16, color: "#b30000", fontWeight: "bold", marginBottom: 20 }} >Login to your account </Text>
					<Field placeholder="Email / Username" keyboadType={"email-address"} />
					<Field placeholder="Password" secureTextEntry={true}/>
					<View style={{ alignItems: "flex-end", width: "78%", paddingRight: 16, marginBottom: 200 }} >
						<Text style={{ color: "#4d0000", fontWeight: "bold", fontSize:16 }} >Forgot Password ?</Text>
					</View>
					<Btn bgColor="#4d0000" textColor="#fff" btnLable="Login"  press={()=> alert ("Login In")} />
					<View  style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
						<Text style={{fontWeight: "bold", fontSize: 16}}>Don't have an account ?</Text>
						<TouchableOpacity onPress={() => props.navigation.navigate("Signup") } >
						 <Text style={{ color: "#4d0000", fontWeight: "bold", fontSize: 16 }} >Signup</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Background>
	);
}

export default Login;