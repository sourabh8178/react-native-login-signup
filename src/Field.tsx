import React from 'react';
import {View, TextInput} from 'react-native';

const Field = props => {
	return(
		<TextInput {...props} style={{ borderRadius: 100, color: "#4d0000", paddingHorizontal: 10, width: "80%", backgroundColor: "rgb(220, 220, 220)",marginVertical: 20 }} >
		</TextInput>
	);
}

export default Field;