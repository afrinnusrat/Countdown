import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDateTime, saveEvents } from './api';

class EventForm extends Component {
  state = {
    title: null,
    date: ''
  }

  handleAddPress = () => {
    saveEvents(this.state)
      .then(() => this.props.navigation.goBack());
  }

  handleChangeTitle = (value) => {
    this.setState({ title: value });
  }

  handleDatePress = () => {
    this.setState({ showDatePicker: true });
  }

  handleDatePicked = (date) => {
    this.setState({
      date,
    });

    this.handleDatePickerHide();
  }

  handleDatePickerHide = () => {
    this.setState({ showDatePicker: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fieldContainer}>
          <TextInput 
            style={styles.text}
            placeholder="Event Title"
            underlineColorAndroid='rgba(0,0,0,0)'
            spellCheck={false}
            value={this.state.title}
            onChangeText={this.handleChangeTitle}
          />
          <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder="Event Date"
            underlineColorAndroid='rgba(0,0,0,0)'
            spellCheck={false}
            value={formatDateTime(this.state.date.toString())}
            editable={this.state.showDatePicker}
            onFocus={this.handleDatePress} />
          <DateTimePicker
            isVisible={this.state.showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
            onCancel={this.handleDatePickerHide} />
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleAddPress}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  },
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    borderColor: '#48bbec',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  borderTop: {
    borderColor: '#edeeef',
    borderTopWidth: 0.5,
  },
});

export default EventForm;