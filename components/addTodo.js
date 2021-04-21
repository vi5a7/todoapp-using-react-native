import React, {useState} from 'react'
import { StyleSheet, View, Text, Button, TextInput} from 'react-native'

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('')

    const changeHandler = (todo) => {
        setText(todo);
        
    }
    
    return(
        <View>
            <TextInput
                style= {styles.input}
                placeholder='new todo ...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})