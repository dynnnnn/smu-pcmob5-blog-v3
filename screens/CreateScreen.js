import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TextArea } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import axios from "axios";



const API = "https://pcmob5-blog-api.gladynw.repl.co";
const API_CREATE = "/create";

export default function CreateScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);
  

  function titleChange(event){
    setTitle(event.target.value);
    console.log(title);
  }

  function contentChange(event){
    setContent(event.target.value);
    console.log(content);
  }

  function createPost(){
    const params = JSON.stringify({

      "title": title,
      
      "content": content,
      
      });

      axios.post(API + API_CREATE, params,{

        "headers": {
        
        "content-type": "application/json",
        
        },
        
        })
        .then(function(response){
          console.log(response);
          setSubmitted(true);
          setTitle("");
          setContent("");
        })

        .catch(function(error){
          console.log(error)
        });

 

  }
  

  return (
    <View style={commonStyles.container}>
      <Text style={styles.title}>Create a Post</Text>
      
      <TextInput 
      style={styles.input}
      name="title"
      onChange={titleChange}
      value={title}
      placeholder="Title"></TextInput>
      <TextInput 
      style={styles.content}
      name="content"
      onChange={contentChange}
      value={content}
      placeholder="Content"></TextInput>
      <Button onPress={createPost} title="Submit"/>
      <Text style={styles.submit}>{submitted ? "Post Submitted": null}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 50,
    marginBottom: 40,
    fontWeight: "bold"
  },
  input: {
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 24,
    padding: 4,
    height: 36,
    width: "60%",
    fontSize: 18,
    backgroundColor: "white",
  },
  content: {
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 24,
    padding: 4,
    height: 60,
    width: "60%",
    fontSize: 18,
    backgroundColor: "white",
  },
  submit:{
    padding: 4,
    color : "green"
  }
});
