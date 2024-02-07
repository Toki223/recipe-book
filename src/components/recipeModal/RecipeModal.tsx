import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HTML from 'react-native-render-html';

const RecipeModal = ({isVisible, onClose, recipe}: any) => {
  if (!isVisible || !recipe) {
    return null;
  }

  const {
    title,
    image,
    servings,
    readyInMinutes,
    healthScore,
    cuisines,
    dishTypes,
    extendedIngredients,
    summary,
  } = recipe;

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={onClose}>
      <ScrollView style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          {/* Details Segment */}
          {servings &&
            readyInMinutes &&
            healthScore &&
            cuisines &&
            dishTypes && (
              <View style={styles.segmentContainer}>
                <Text style={styles.segmentTitle}>Details</Text>
                <View style={styles.segmentContent}>
                  <Text style={styles.subtitle}>Servings: {servings}</Text>
                  <Text style={styles.subtitle}>
                    Ready in Minutes: {readyInMinutes}
                  </Text>
                  <Text style={styles.subtitle}>
                    Health Score: {healthScore}
                  </Text>
                  <Text style={styles.subtitle}>
                    Cuisines: {cuisines.join(', ')}
                  </Text>
                  <Text style={styles.subtitle}>
                    Dish Types: {dishTypes.join(', ')}
                  </Text>
                </View>
              </View>
            )}

          {/* Ingredients Segment */}
          {extendedIngredients && extendedIngredients.length > 0 && (
            <View style={styles.segmentContainer}>
              <Text style={styles.segmentTitle}>Ingredients</Text>
              <View style={styles.segmentContent}>
                {extendedIngredients.map((ingredient: any, index: any) => (
                  <Text key={index} style={styles.ingredients}>
                    {ingredient.original}
                  </Text>
                ))}
              </View>
            </View>
          )}

          {/* Summary Segment */}
          {summary && (
            <View style={styles.segmentContainer}>
              <Text style={styles.segmentTitle}>Summary</Text>
              <View style={styles.segmentContent}>
                <HTML
                  source={{html: summary}}
                  contentWidth={Dimensions.get('window').width}
                  tagsStyles={{a: {color: 'orange'}}}
                  baseStyle={styles.htmlStyle}
                />
              </View>
            </View>
          )}

          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD700',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 5,
  },
  segmentContainer: {
    backgroundColor: '#000',
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
  },
  segmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFD700',
  },
  segmentContent: {},
  ingredients: {
    fontSize: 14,
    marginVertical: 2,
    fontStyle: 'italic',
    color: '#FFD700',
  },
  closeButton: {
    position: 'absolute',
    top: -50,
    right: 10,
    backgroundColor: '#000',
    borderRadius: 15,
    padding: 10,
  },
  closeButtonText: {
    color: '#FFD700',
  },
  htmlStyle: {
    color: '#FFD700',
  },
});

export default RecipeModal;
