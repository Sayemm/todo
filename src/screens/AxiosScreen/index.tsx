import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {BoxComponenet} from '../../components';
import listData from '../../data/data';

const AxiosScreen: React.FC = () => {
  const renderItem = ({item, index}: {item: any; index: number}) => {
    console.log(typeof index);

    return (
      <BoxComponenet
        userId={item.userId}
        id={item.id}
        title={item.title}
        completed={item.completed}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.title + index}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AxiosScreen;
