import react from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import { BlurView } from 'expo-blur';

const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg';
const profilePicture = 'https://randomuser.me/api/portraits/men/34.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={[styles.image, StyleSheet.absoluteFill]}></Image>
      <ScrollView contentContainerStyle={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <BlurView intensity={100}>
          <View style={styles.login}>
            <Image source={{uri: profilePicture}} style={styles.profilePicture}></Image>
            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>E-mail</Text>
              <TextInput style={styles.input} placeholder="tucorreo@dominio.com"></TextInput>
            </View>
            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Password</Text>
              <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}></TextInput>
            </View>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20,
  },
});
