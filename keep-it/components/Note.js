import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
 
// make a note that is class component which have
// a paricular note with design

export default class Note extends React.Component
{
  render()
  {
    return (
      <View style={styles.note} key={this.props.task}>
        <Text style={styles.noteText}>{this.props.task.note}</Text>
        <Text style={styles.noteText}>{this.props.task.date}</Text>
        <TouchableOpacity style={styles.noteDone}
        onPress = {this.props.markDone}
        >
        <Text style = {{color : 'white'}}> Done </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position:'relative',
    padding : 20,
    paddingRight : 200,
    borderBottomColor: '#ededed',
    borderBottomWidth:2
  } ,  
  noteText :{
    paddingLeft : 20,
    borderLeftColor : '#ededed',
    borderLeftWidth : 10
  },
  noteDone:{
    position: 'absolute',
    top:10,
    bottom : 10,
    right : 10,
    padding  :10,
    backgroundColor: 'grey',
    justifyContent : 'center',
    alignItems : 'center', 
    borderRadius : 10
  }
});
