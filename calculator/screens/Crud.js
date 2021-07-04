import React, { useState, useEffect } from 'react';
import { API } from '../config/api';
import {
   View,
   Text,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   FlatList,
   ScrollView,
} from 'react-native';
import PostItem from '../components/Crud/PostItem';

const Crud = () => {
   const [title, onChangeTitle] = useState('');
   const [content, onChangeContent] = useState('');
   // Initialized DataState
   const [postData, setPostdata] = useState(null);
   const [loading, setLoading] = useState(true);

   // Get data Post
   const getdataPost = async () => {
      const config = {
         headers: {
            'Content-type': 'application/json',
         },
      };
      const res = await API.get(`/cruds`, config);
      setPostdata(res.data.data.posts);
      setLoading(false);
   };

   useEffect(() => {
      getdataPost();
      return;
   }, []);

   const addPost = async (title, content) => {
      const config = {
         headers: {
            'Content-type': 'application/json',
         },
      };

      const addData = {
         title: title,
         content: content,
      };

      const res = await API.post(`/cruds`, addData, config);
      setPostdata(res);
      onChangeTitle('');
      onChangeContent('');
      getdataPost();
   };
   return (
      <View style={styles.container}>
         <TextInput
            style={styles.formStyle}
            onChangeText={onChangeTitle}
            value={title}
            placeholder="Input your Title"
         />
         <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
               addPost(title, content);
            }}
         >
            <Text style={styles.textBox}>Input Data</Text>
         </TouchableOpacity>
         {!loading ? (
            <ScrollView style={styles.viewScroll}>
               <FlatList
                  data={postData}
                  renderItem={({ item }) => (
                     <PostItem
                        title={item.title}
                        deleted={item.deleted}
                        id={item.id}
                        getdataPost={getdataPost}
                     />
                  )}
                  keyExtractor={(item) => item.id}
               />
            </ScrollView>
         ) : (
            <View>loading.....</View>
         )}
      </View>
   );
};

export default Crud;

const styles = StyleSheet.create({
   container: {
      width: '100%',
      // alignItems: 'center',
      // justifyContent: 'center',
      // paddingTop: 10,
      padding: 10,
      flex: 1,
      backgroundColor: '#FFA0A0',
   },
   formStyle: {
      backgroundColor: 'white',
      height: 35,
      borderRadius: 10,
      marginTop: 20,
      border: '#aa5566 2px solid',
   },
   buttonStyle: {
      backgroundColor: '#aa5566',
      height: 35,
      borderRadius: 10,
      marginTop: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },

   viewScroll: {
      backgroundColor: 'white',
      height: '20%',
      flexGrow: 0.8,
      borderRadius: 10,
      marginTop: 20,
      padding: 12,
      border: '#aa5566 3px solid',
   },
   textBox: { color: 'white', fontSize: 18 },
});
