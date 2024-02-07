import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/recipeBook.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to Book of Recipes</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Go to Search Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  imageContainer: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  titleContainer: {
    backgroundColor: '#000',
    borderRadius: 20,
    height: 60,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 120,
  },
});

export default HomeScreen;
