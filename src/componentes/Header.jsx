
import React, {useState} from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

// import userPic from '../../assets/img/user.svg'


const Header = () => {
    /*   const userPic = useState(require("../../assets/img/list.svg")); */
    const userName = useState("Nombre del usuario");
    const motivationSentence = useState("¡Buenos días fgdsf fds f fdsgrd fds gds!");  
    
    return (
        <View style={styles.container}>
        <View style={{marginRight:20}}>
            <Image 
                style={styles.userPic}
                source={require('../../assets/img/user.svg')}
                />
        </View>
        <View>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.motivationSentence}>{motivationSentence}</Text>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#00000030", /* color y transparencia */
    width: '100%',
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-start;',
    alignItems: 'center',
    /*     width: '100%', */
  },
  userPic: {
    width: 70,
    height: 70,
  },
  userName: {
    color: '#2673B8',
    fontWeight: 600,
    fontSize: "1.2em",
},
motivationSentence: {
    color: 'green',
    fontSize: "1.1em",
    fontWeight: 400,
    fontStyle: 'italic',
  },
});
export default Header;