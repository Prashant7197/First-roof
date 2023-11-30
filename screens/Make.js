import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, Share, StyleSheet } from 'react-native';
import { TextButton } from '../components';
import { SIZES, COLORS, FONTS } from '../constants';

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
  runningMetres: {
    marginBottom: 5,
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    
  },
});

const Make = ({ navigation }) => {
  const [textInputValues, setTextInputValues] = useState({});
  const [totalUnits, setTotalUnits] = useState(0);
  const [totalRM, setTotalRM] = useState(0);
  const [totalMT, setTotalMT] = useState(0);

  const sizeList = [3.60, 3.00, 2.75, 2.50, 2.25, 2.00, 1.75, 1.50, 1.25, 1.00];
  const rmList = Array(10).fill(0);

  const handleTextChange = (key, value) => {
    const newTextInputValues = { ...textInputValues, [key]: value };
    setTextInputValues(newTextInputValues);

    const index = getIndexByKey(key);
    const newTuList = [...tuList];
    const newRmList = [...rmList];

    try {
      newTuList[index] = value !== '' ? parseInt(value) : 0;
      newRmList[index] = newTuList[index] * sizeList[index];
    } catch (error) {
      newTuList[index] = 0;
      newRmList[index] = 0;
    }

    setTuList(newTuList);
    setRmList(newRmList);
    updateTU(newTuList);
  };

  const getIndexByKey = (key) => {
    const keyMap = {
      et360: 0,
      et300: 1,
      et275: 2,
      et250: 3,
      et225: 4,
      et200: 5,
      et175: 6,
      et150: 7,
      et125: 8,
      et100: 9,
    };
    return keyMap[key];
  };

  const updateTU = (newTuList) => {
    const sum = newTuList.reduce((acc, tu) => acc + tu, 0);
    setTotalUnits(sum);
    updateTRM();
    try {
      saveData();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const updateTRM = () => {
    const sum = rmList.reduce((acc, rm) => acc + rm, 0);
    setTotalRM(sum);
    setTotalMT(sum / 78.74);
  };

  const saveData = async () => {
    // Implement saving data to storage (AsyncStorage or any other storage solution)
    // Example using AsyncStorage:
    try {
      const dataToSave = tuList.join('\n');
      await AsyncStorage.setItem('tuList', dataToSave);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const loadData = async () => {
    // Implement loading data from storage (AsyncStorage or any other storage solution)
    // Example using AsyncStorage:
    try {
      const data = await AsyncStorage.getItem('tuList');
      const loadedTuList = data ? data.split('\n').map(Number) : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      setTuList(loadedTuList);
      setRmList(loadedTuList.map((tu, index) => tu * sizeList[index]));
      updateTU(loadedTuList);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };
  const generateReceipt = async () => {
    try {
      await saveData();
      await loadData();
    } catch (error) {
      console.error('Error generating receipt:', error);
    }

    updateTRM();

    const receiptText = `============ *Receipt* ============\n\n*Size*\t\t\t\t*Units*\t\t\t\t*Running Metres*\n__________________________________\n${sizeList
      .map(
        (size, i) =>
          !textInputValues[`et${size}`] === '0'
            ? `${size}\t\t\t\t\t${textInputValues[`et${size}`]}\t\t\t\t\t\t\t\t\t\t\t\t${rmList[i]}\n__________________________________\n`
            : ''
      )
      .join('')}\n*Total Units* : ${totalUnits}\n*Total Running Metres* : ${totalRM}\n*MT* : ${totalMT}`;

    Share.share({
      message: receiptText,
    });
  };

  useEffect(() => {
    // Update totalUnits, totalRM, totalMT whenever text input values change
    // You may need to modify this logic based on your specific requirements
    let unitsSum = 0;
    let rmSum = 0;

    sizeList.forEach((size, i) => {
      const inputValue = parseFloat(textInputValues[`et${size}`]) || 0;
      const runningMetres = inputValue * size;
      
      unitsSum += inputValue;
      rmSum += runningMetres;

      rmList[i] = runningMetres;
    });

    setTotalUnits(unitsSum);
    setTotalRM(rmSum);
    setTotalMT(rmSum / 78.74);
  }, [textInputValues]);

  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Make Order</Text>
      <TextButton
                   contentContainerStyle={{
                       flex: 1,
                       width: 90,
                       height: 30,
                       marginLeft: 280,
                       marginTop: -30,
                       marginBottom: 10,
                       borderRadius: SIZES.radius,
                       backgroundColor: COLORS.primary
                   }}
                   labelStyle={{
                       ...FONTS.h3
                   }}
                    label="Home"
                    onPress={() => navigation.navigate("Home")}
                />
      {sizeList.map((size, i) => (
        <View key={size} style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={`Enter units for size ${size}`}
            keyboardType="numeric"
            value={textInputValues[`et${size}`]}
            onChangeText={(value) => handleTextChange(`et${size}`, value)}
          />
          <Text style={styles.runningMetres}>{`Running Metres: ${rmList[i]}`}</Text>
        </View>
      ))}
      <Text style={styles.totalText}>{`Total Units: ${totalUnits}`}</Text>
      <Text style={styles.totalText}>{`Total Running Metres: ${totalRM}`}</Text>
      <Text style={styles.totalText}>{`Total MT: ${totalMT}`}</Text>
      <Button title="Generate Receipt" onPress={generateReceipt} style={styles.button} />
    </ScrollView>
  );
};

export default Make;
