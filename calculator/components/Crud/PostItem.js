import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { API } from '../../config/api';

const PostItem = ({ title, deleted, id, getdataPost }) => {
   const updatedataPost = async (id, deleted) => {
      const config = {
         headers: {
            'Content-type': 'application/json',
         },
      };
      const data = {
         deleted: !deleted,
      };

      await API.patch(`/cruds/${id}`, data, config);
      getdataPost();
   };

   const deletedataPost = async (id) => {
      const config = {
         headers: {
            'Content-type': 'application/json',
         },
      };

      await API.delete(`/cruds/${id}`, config);
      getdataPost();
   };
   return (
      <View style={styles.itemContainer}>
         <View style={styles.titleWrapper}>
            {deleted ? (
               <Text
                  style={[styles.itemContainer, styles.titleWrapper]}
                  style={styles.textStyleDeleted}
               >
                  {title}
               </Text>
            ) : (
               <Text
                  style={[styles.itemContainer, styles.titleWrapper]}
                  style={styles.textStyle}
               >
                  {title}
               </Text>
            )}
         </View>

         <View style={styles.iconContainer}>
            {deleted ? (
               <TouchableOpacity
                  style={styles.iconWrapper}
                  onPress={() => {
                     updatedataPost(id, deleted);
                  }}
               >
                  <Ionicons name="md-close" size={24} color="#aa5566" />
               </TouchableOpacity>
            ) : (
               <TouchableOpacity
                  style={styles.iconWrapper}
                  onPress={() => {
                     updatedataPost(id, deleted);
                  }}
               >
                  <Ionicons name="checkmark" size={24} color="#aa5566" />
               </TouchableOpacity>
            )}

            <TouchableOpacity
               style={styles.iconWrapper}
               onPress={() => {
                  deletedataPost(id);
               }}
            >
               <Ionicons name="trash" size={25} color="#aa5566" />
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default PostItem;

const styles = StyleSheet.create({
   itemContainer: {
      width: '100%',
      // alignItems: 'center',
      // justifyContent: 'center',
      // paddingTop: 10,
      padding: 7,
      display: 'flex',
      backgroundColor: '#FFA0A0',
      borderRadius: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   textStyle: {
      fontSize: 20,
      color: '#aa5566',
      fontWeight: 'bold',
   },
   textStyleDeleted: {
      fontSize: 20,
      color: '#aa5566',
      fontWeight: 'bold',
      textDecorationLine: 'line-through',
   },
   iconWrapper: {
      height: 25,
      width: 25,
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 10,
   },
   iconContainer: {
      display: 'flex',
      flexDirection: 'row',
   },
   titleWrapper: {},
});
