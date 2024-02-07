import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  Image,
} from 'react-native';
import axios from 'axios';
import SearchIcon from '../assets/icons/searchIcon';
import CustomField from '../components/customField/customField';
import RecipeModal from '../components/recipeModal/RecipeModal';

const SearchScreen = () => {
  const [text, setText] = useState('Search desired recipe');
  const [recipes, setRecipes] = useState([]);
  const [chosenRecipeId, setChosenRecipeId] = useState(0);
  const [chosenRecipe, setChosenRecipe] = useState(null);
  const foodCategories = [
    {
      name: 'Pizza',
      image: require('../assets/images/pizza.jpg'),
      query: 'pizza',
    },
    {
      name: 'Burger',
      image: require('../assets/images/burger.jpg'),
      query: 'burger',
    },
    {
      name: 'Pasta',
      image: require('../assets/images/pasta.jpg'),
      query: 'pasta',
    },
    {name: 'Fish', image: require('../assets/images/fish.jpg'), query: 'fish'},
    {
      name: 'Fries',
      image: require('../assets/images/fries.jpg'),
      query: 'fries',
    },
    {
      name: 'Pancake',
      image: require('../assets/images/pancake.jpg'),
      query: 'pancake',
    },
    {name: 'Meat', image: require('../assets/images/meat.jpg'), query: 'meat'},
    {name: 'Soup', image: require('../assets/images/soup.jpg'), query: 'soup'},
    {
      name: 'Sweets',
      image: require('../assets/images/sweets.jpg'),
      query: 'sweets',
    },
  ];

  const fetchRecipes = async () => {
    const configuration = {
      method: 'get',
      url: `https://api.spoonacular.com/recipes/complexSearch?query=${text}&number=5`,
      headers: {
        'x-api-key': 'd9dd887e1b9a4a978942a4938bed9302',
      },
    };
    const response = await axios(configuration);
    setRecipes(response.data.results);
    console.log(response.data.results);
  };
  const fetchRecipesByCategory = async (query: string) => {
    const configuration = {
      method: 'get',
      url: `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5`,
      headers: {
        'x-api-key': 'd9dd887e1b9a4a978942a4938bed9302',
      },
    };
    try {
      const response = await axios(configuration);
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  const fetchRandomRecipe = async () => {
    try {
      const configuration = {
        method: 'get',
        url: 'https://api.spoonacular.com/recipes/random',
        headers: {
          'x-api-key': 'd9dd887e1b9a4a978942a4938bed9302',
        },
      };
      const response = await axios(configuration);
      setChosenRecipe(response.data.recipes[0]);
    } catch (error) {
      console.error('Error fetching random recipe:', error);
    }
  };
  const handleRandomRecipeButtonPress = () => {
    fetchRandomRecipe();
  };
  useEffect(() => {
    async function getChosenRecipe() {
      const configuration = {
        method: 'get',
        url: `https://api.spoonacular.com/recipes/${chosenRecipeId}/information`,
        headers: {
          'x-api-key': 'd9dd887e1b9a4a978942a4938bed9302',
        },
      };
      const response = await axios(configuration);
      console.log(response.data);
      setChosenRecipe(response.data);
    }
    if (chosenRecipeId) {
      getChosenRecipe();
    }
  }, [chosenRecipeId]);

  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <View style={styles.search}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryContainer}>
            {foodCategories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryButton}
                onPress={() => {
                  fetchRecipesByCategory(category.query);
                  setText(category.name);
                }}>
                <Image source={category.image} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TextInput
            style={styles.input}
            onChangeText={newText => setText(newText)}
            onFocus={() => setText('')}
            value={text}
            onSubmitEditing={fetchRecipes}
          />
          <View style={styles.searchIcon}>
            <TouchableOpacity onPress={fetchRecipes}>
              <SearchIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ScrollView style={styles.recipeContainer}>
            {recipes.map((item: any) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setChosenRecipeId(item.id);
                }}>
                <CustomField
                  key={item.id}
                  imageSource={item.image}
                  title={item.title}
                />
              </TouchableOpacity>
            ))}

            {chosenRecipe && (
              <RecipeModal
                isVisible={!!chosenRecipe}
                onClose={() => setChosenRecipe(null)}
                recipe={chosenRecipe}
              />
            )}
          </ScrollView>
          <View style={styles.randomRecipeButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleRandomRecipeButtonPress}>
              <Text style={styles.buttonText}>Random Recipe</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#FFD700',
  },
  recipeContainer: {
    width: '100%',
    height: 380,
    top: 180,
  },
  middle: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    marginTop: 40,
  },
  searchIcon: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: 8,
    top: 105,
  },
  header: {
    position: 'absolute',
    top: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150,
    borderBottomWidth: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  search: {
    position: 'absolute',
    width: '100%',
  },
  categoryContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  categoryButton: {
    borderRadius: 30,
    overflow: 'hidden',
    marginHorizontal: 5,
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    marginTop: 5,
    color: '#FFD700',
    textAlign: 'center',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  randomRecipeButton: {
    width: '90%',
    marginTop: 230,
    marginLeft: '5%',
    height: 60,
  },
  button: {
    backgroundColor: '#000',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
});

export default SearchScreen;
