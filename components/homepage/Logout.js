import React from 'react'
import { View,Button} from 'react-native'

class Logout extends React.Component{

        render(){
            return(
                <View style={{justifyContent:"flex-end", alignItems:"flex-end"}}>
            <Button title="Logout" color="#008000"></Button>
                </View>
            )
        }

}

export default Logout;
