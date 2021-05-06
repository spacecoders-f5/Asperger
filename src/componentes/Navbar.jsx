import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

 const Navbar = () => {
        return (
            <View style={styles.navbar, {flexDirection: "row"}}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/img/anadir.svg')}
                        style={{ width: 100, height: 100, marginBottom: 15 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/img/list.svg')}
                        style={{ width: 100, height: 100, marginBottom: 15 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/img/trofeo.svg')}
                        style={{ width: 100, height: 100, marginBottom: 15 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/img/color-palette.svg')}
                        style={{ width: 100, height: 100, marginBottom: 15 }}
                    />
                </TouchableOpacity>
          
            </View>

        )




}
const styles = StyleSheet.create({

    navbar: {
        flex: 1,
        backgroundColor: '#1E73BE',
        alignItems: 'center',
        justifyContent: 'center',
      },


})

export default Navbar