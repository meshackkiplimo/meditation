import { View, Text, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import beachImage from '../assets/meditation-images/beach.webp';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <ImageBackground 
      source={beachImage} 
      resizeMode="cover" 
      style={styles.background}
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Text style={styles.text}>Simple Meditation App</Text>
            <Text className='text-center text-white' >Made with ❤️</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',  // Aligns the content to the top of the screen
    alignItems: 'center',
    paddingTop: 50,  // Optional: Adds some space from the top
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
});

export default App;
