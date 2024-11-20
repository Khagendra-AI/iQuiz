import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setLevel, setName, updateSet, updateWrong } from '../../redux/config/configSlice'

const Completed = ({navigation}:{navigation:any}) => {
  const {level,name,correct,wrong,} = useSelector(
    (state: any) => {
      // console.log(state.mainapi)
      return state.mainapi;
    },)
    const dispatch=useDispatch()
    const onRetakePress=()=>{
      dispatch(updateSet("")),
      dispatch(updateWrong("")),
      dispatch(setName("")),
      dispatch(setLevel("")),
      navigation.navigate("Login")
    }
  return (
    <View style={styles.container}>
      <View style={styles.completedView}>
      <Text style={styles.completedText}>Completed!!</Text>
      </View>
      <View style={styles.paraView}>
        <Text style={styles.paraText}>Hey {name}, here's your performace at {level} level.</Text>
      </View>
      <View style={styles.detailView}>
        <View style={styles.infoView}>
        <Text style={styles.infoText}>Total Attempted</Text>
        <Text style={styles.infoValue}>{correct+wrong}</Text>
        </View>
        <View style={styles.infoView}>
        <Text style={styles.infoText}>Correctly Answered</Text>
        <Text style={styles.infoValue}>{correct}</Text>
        </View>
        <View style={styles.infoView}>
        <Text style={styles.infoText}>Wrongly Answered</Text>
        <Text style={styles.infoValue}>{wrong}</Text>
        </View>
        <View style={styles.infoView}>
        <Text style={styles.infoText}>Accuracy</Text>
        <Text style={styles.infoValue}>{(correct)/(correct+wrong)*100}%</Text>
        </View>
        <View style={styles.infoView}>
        <Text style={styles.infoText}>Point</Text>
        <Text style={styles.infoValue}>{correct}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonView} onPress={onRetakePress}>
            <Text style={styles.goText}>Click to Retake</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Completed

