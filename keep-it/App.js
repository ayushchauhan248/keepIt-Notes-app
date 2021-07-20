import * as React from 'react';
import { Text,TextInput, TouchableOpacity, View, StyleSheet , ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Note from './components/Note'
import db from './config'

export default class App extends React.Component {
  constructor(){
    super();

  // initialize the state
    this.state  = {
        noteArr : [],
        noteText : ''
    }
  }

  // when done remove the data
  markDone = (item) => {
    const node = db.ref('tasks').child(this.state.noteArr[item].id);
    node.remove();
    this.state.noteArr.splice(item , 1)
  }

  // pushing task on todos 
  componentDidMount(){
    const tasks = db.ref('tasks')
    tasks.on('value' , (data) => {
      const todos  = data.val();
      console.log(todos);
      const taskList = []
      for(var id in todos){
        taskList.push({id , ...todos[id]});
      }
      this.setState({noteArr:taskList})
    } )
  }

  // method to add the task
  addtask = () => {
    
    // create a database refrence
    const tasks = db.ref('tasks')
    // declare the date  
    var d = new Date()
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May',
      'June' , 
      'July' , 
      'Aug' , 
      'Sep' , 
      'Oct' , 
      'Nov' , 
      'Dec'
    ];


    if(this.state.noteText){
    const newTask = {
      note : this.state.noteText,
      date : d.getDate()  +  ' ' + monthNames[d.getMonth()] + ' ' +  d.getFullYear() 
    }

  // pusshing the into the database 
    tasks.push(newTask)
    this.setState({noteText:''})
    console.log(this.state.noteArr)
  }};
  render(){
    var notes = this.state.noteArr.map((index ,item) =>{
      return (
      <Note task = {index}  markDone = {() => {this.markDone(item)}}/> 
      )
    });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize:22}}>
        KEEP IT
        </Text>
      </View>
      <ScrollView style={styles.scroll}>
        {notes}
      </ScrollView>
      <View style={styles.bottom}>
        <TextInput placeholder="Enter Task" style = {styles.inputText}

        onChangeText = {(text)=> {this.setState({noteText:text})}}
        value = {this.state.noteText}
        />
        <TouchableOpacity style = {styles.inputButton}
        onPress = {this.addtask}
        >
          <Text style={{fontSize:30}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor : "gold",
    height:70,
    justifyContent:'center',
    textAlign: 'center',
    borderBottomWidth : 3,
    borderBottomColor:'grey',
  },
  bottom:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    borderTopColor :'gold',
    borderTopWidth:2,
  },
  inputText:{
    padding : 20,
    outline:'none'
  },
  inputButton : {
    position : 'absolute',
    bottom:10,
    height:40,
    right:20,
    width:40,
    backgroundColor:'gold',
    justifyContent:'center',
    textAlign: 'center',
    borderRadius:50,
  }, 
  scroll:{
    flex :1,
    marginBottom : 100
  }
});
