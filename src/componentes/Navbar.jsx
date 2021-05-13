import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

 const Navbar = () => {
        return (
            <View style={styles.navbar}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/img/anadir.svg')}
                        style={ styles.img }
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/img/list.svg')}
                        style={ styles.img }                    
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/img/trofeo.svg')}
                        style={ styles.img }                    
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/img/color-palette.svg')}
                        style={ styles.img }                    
                    />
                </TouchableOpacity>
          
            </View>

        )




}
const styles = StyleSheet.create({

    navbar: {
        position: 'absolute',
        bottom: 0,
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#1E73BE',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10
      },
     img: {
        minWidth: 30,
        minHeight: 30
     }



})

export default Navbar