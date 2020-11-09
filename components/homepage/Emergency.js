
import React from 'react'
import { View,Button, Text,Modal} from 'react-native'
// import { Picker } from '@react-native-picker/picker' -------- IT IS GIVING ERROR WHILE COMPILING, REMOVE COMMENT THEN RUN THE CODE

class Emergency extends React.Component{

    constructor()
        {
            super();
            this.state={
                show:false
            }
        }
        Show=(value)=>
        {
            alert(value);
        }

    render() {
        return(
            <View style={{justifyContent:"flex-start", alignItems:"flex-end"}}>
            <Button title="EMERGENCY" color="#FF0000" onPress={()=>{this.setState({show:true})}}></Button>
            <Modal
            transparent={true}
            visible={this.state.show}
            >
            <View style={{justifyContent:"flex-start", alignItems:"flex-end"}}>
            
            <Text style={{fontSize: 50}}>Do you need help? </Text>
            
            <Picker onValueChange={this.Show.bind()}>
                <Picker.Item label="Select" value="0"/>
                <Picker.Item label="NO" value="OK"/>
                <Picker.Item label="YES" value="Contact 9152987821 "/>
            </Picker>
            </View>
            </Modal>
            </View>
            
        )
    }
}

export default Emergency;
