import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../assets';
import { setCorrect, setLevel, setName, setWrong, updateSet, updateWrong } from '../../redux/config/configSlice';
//setx(Math.floor(Math.random() * (100 - 10 + 1)) + 10.)
const Quiz2 = ({navigation}:{navigation:any}) => {
  const opArray=['+','-','*','/']
  let i = Math.floor(Math.random() * opArray.length);
  let operator = opArray[i];
  const result = (expression : string) => eval(expression)
  const [x, setx] = useState<number>(0);
  const [y, sety] = useState<number>(0);
  const {level,name} = useSelector(
    (state: any) => {
      // console.log(state.mainapi)
      return state.mainapi;
    },)
    const onNextPress=()=>{
      navigation.navigate("Quiz3")
    }
  const randomNumber = () => {
    //if() level check
     if(level=='easy'){
    setx(Math.floor(Math.random() * (20 - 10 + 1)) + 10.),
    sety(Math.floor(Math.random() * (20 - 10 + 1)) + 10.)
     }
     else if(level=='medium'){
      setx(Math.floor(Math.random() * (50 - 20 + 1)) + 20.),
    sety(Math.floor(Math.random() * (50 - 20 + 1)) + 20.)
     }
     else{
      setx(Math.floor(Math.random() * (100 - 50 + 1)) + 50.),
    sety(Math.floor(Math.random() * (100 - 50 + 1)) + 50.)
     }
  };
  useEffect(() => {
    randomNumber();
  }, []);
  const onOption1Press=()=>{
    dispatch(setWrong(""))
    navigation.navigate("Quiz3")
  }
  const onOption2Press=()=>{
    dispatch(setWrong(""))
    navigation.navigate("Quiz3")
  }
  const onOption3Press=()=>{
    dispatch(setWrong(""))
    navigation.navigate("Quiz3")
  }
  const onOption4Press=()=>{
    dispatch(setCorrect(""))
    navigation.navigate("Quiz3")
  }
  const dispatch=useDispatch()
  const onLogoutPress=()=>{
    dispatch(updateSet("")),
    dispatch(updateWrong("")),
    dispatch(setName("")),
    dispatch(setLevel("")),
    navigation.navigate("Login")
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Question 2</Text>
        <View style={styles.logoutView}>
        <Text style={styles.hiText}>Hi {name}</Text>
        <TouchableOpacity style={styles.touchableLogout} onPress={onLogoutPress}>
        <Image
        source={Icon.logout}
        style={styles.logoutImage}
        />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.questionView}>
          <Text style={styles.questionText}>{x}{operator}{y}=?</Text>
        </View>
        <View style={styles.optionView}>
          <TouchableOpacity style={styles.optionTouchable} onPress={onOption1Press}><Text style={styles.optionText}>{result(`${x}${operator}${y}+2`)}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.optionTouchable} onPress={onOption2Press}><Text style={styles.optionText}>{result(`${x}${operator}${y}-1`)}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.optionTouchable} onPress={onOption3Press}><Text style={styles.optionText}>{result(`${x}${operator}${y}+1`)}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.optionTouchable} onPress={onOption4Press}><Text style={styles.optionText}>{result(`${x}${operator}${y}`)}</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.touchableNext} onPress={onNextPress}>
          <Text style={styles.nextText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz2;
