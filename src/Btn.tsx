import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Btn = ({ bgColor, btnLable, textColor, Press }) => {
	return (
    <TouchableOpacity 
    onPress={Press}
    	style={{
    		backgroundColor: bgColor,
    		borderRadius: 100,
    		alignItems: 'center',
    		width: 250,
    		paddingVertical: 10,
    		marginVertical: 10
    	}} >
    	<Text style={{color: textColor, fontSize: 22, fontSize:22, fontWeight: 'bold' }}>
    	{btnLable}
    	</Text>
    </TouchableOpacity>
  );
}

export default Btn;