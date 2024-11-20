import { Dimensions, StyleSheet } from "react-native";
const SCREEN_WIDTH=Dimensions.get('screen').width
const styles = StyleSheet.create({
  container:{
    flex:1,
    

  },
  header:{
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#8AAAE5'
  },
  headerText:{
    color:'#00246B',
    fontSize:21,
    fontWeight:'600',
  },
  body:{
    marginTop:'10%',
    alignItems:'center',
  },
  start:{
    fontSize:25,
    fontWeight:'500'
  },
  inputView:{
    marginTop:'20%',
    alignItems:'center',
    width:SCREEN_WIDTH
  },
  input1:{
    borderRadius:10,
    borderColor:'grey',
    borderWidth:1,
    padding:10,
    width:'80%',

  },
  difficultyView:{
    alignItems:'center',
    width:SCREEN_WIDTH,
    padding:10,
    marginVertical:'10%'
  },
  difficultySubView:{
    width:SCREEN_WIDTH*.8,
    marginVertical:10,
    borderRadius:10,
    padding:10,
    alignItems:'center',
    backgroundColor:'#E7E8D1',
    flexDirection:'row',
    justifyContent:"space-between"
  },
  difficultyText1:{
    color:'green',
    
  },
  difficultyText2:{
    color:'#E4D00A',
    
  },
  difficultyText3:{
    color:'red',
    
  },
  setText:{
    fontSize:20,
  },
  buttonView:{
    marginTop:5,
    padding:5,
    backgroundColor:'#CADCFC',
    borderRadius:10,
  },
  goText:{
    fontSize:20,
  },
})
export default styles