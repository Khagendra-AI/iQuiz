import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {setLevel, setName} from '../../redux/config/configSlice';

const Login = ({navigation}: {navigation: any}) => {
  const [name, setname] = useState('');
  const [level, setlevel] = useState('');
  const dispatch = useDispatch();
  const onchange = (e: any) => {
    setname(e);
  };
  const onEasyPress = () => {
    setlevel('easy');
  };
  const onMediumPress = () => {
    setlevel('medium');
  };
  const onHardPress = () => {
    setlevel('hard');
  };
  const onGoPress = () => {
    if (name.length >= 1 && level.length >= 1) {
      dispatch(setName(name)),
        dispatch(setLevel(level)),
        setname(''),
        setlevel(''),
        navigation.navigate('Quiz1');
    } else Alert.alert('Invalid input',"Enter required details");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>iQUIZ</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.start}>Let's Start!</Text>
        <View style={styles.inputView}>
          <TextInput
            value={name}
            onChangeText={onchange}
            style={styles.input1}
            placeholder="Your Name"
          />
        </View>
        <View style={styles.difficultyView}>
          <Text style={styles.setText}>Set Your Difficulty Level</Text>
          <View style={styles.difficultySubView}>
            <Text style={styles.difficultyText1} onPress={onEasyPress}>
              Easy
            </Text>
            <Text style={styles.difficultyText2} onPress={onMediumPress}>
              Medium
            </Text>
            <Text style={styles.difficultyText3} onPress={onHardPress}>
              Hard
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonView} onPress={onGoPress}>
          <Text style={styles.goText}> Go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
