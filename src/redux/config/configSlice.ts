import { createSlice } from "@reduxjs/toolkit";
interface ConfigModal {
    isLoading: boolean;
    count: number;
    products?: any;
    matched: boolean;
  }
  type ActionType = {
    type: string;
    payload: any;
  };
let initialState = {
    count: 0,
    level:'',
    name:'',
    correct:0,
    wrong:0,
    
  };
const configSlice=createSlice({
    name: 'Config',
    initialState,
    reducers: {
      setLevel:(state,action)=>{
        const item=action.payload
        state.level=item
        //console.log(state.level)
      },
      setName:(state,action)=>{
        const item=action.payload
        state.name=item
      //  console.log(state.name)
      },
      setCorrect:(state,action)=>{
        state.correct+=1
      },
      setWrong:(state,action)=>{
        state.wrong+=1
       // console.log(state.wrong)
      },
      updateSet:(state,action)=>{
        state.correct=0
       // console.log(state.correct,"correct")
      },
      updateWrong:(state,action)=>{
        state.wrong=0
       // console.log(state.wrong)
      },

      
    },
  
});
// export const {getProducts} = configSlice.selectors;

export const {
  setLevel,
  setName,
  setCorrect,
  setWrong,
  updateSet,
  updateWrong
} = configSlice.actions;

export default configSlice.reducer;