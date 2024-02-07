import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const CustomField = (props: any) => {
  return (
    <View style={styles.field}>
      <Image style={styles.image} source={{uri: props.imageSource}} />
      <View style={styles.fieldTextView}>
        <Text style={styles.fieldText}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    width: '100%',
    height: 110,
    backgroundColor: '#000',
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  fieldTextView: {
    position: 'absolute',
    width: '50%',
    right: 40,
  },
  fieldText: {
    color: '#FFD700',
  },
  image: {
    flex: 1,
    width: 90,
    height: 90,
    position: 'absolute',
    left: 20,
    borderRadius: 60,
  },
});

export default CustomField;
