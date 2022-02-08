import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../config/Colors';

interface Props {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const BoxComponenet: React.FC<Props> = ({userId, id, title, completed}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>UserId: {userId}</Text>
      <Text style={styles.text}>ID: {id}</Text>
      <Text style={styles.text}>Title: {title}</Text>
      <Text style={styles.text}>Completed: {completed ? 'YES' : 'NO'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    margin: wp(2),
    padding: wp(4),
    backgroundColor: Colors.primaryMain,
    borderRadius: wp(2),
  },
  text: {
    color: Colors.dark0,
    fontSize: RFValue(15),
  },
});

export default BoxComponenet;
