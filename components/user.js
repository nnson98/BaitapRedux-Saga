import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import userReducers from '../reducers';
import {useDispatch, useSelector} from 'react-redux';
export default function Home() {
  const [data, setdata] = useState([]);
  const user = useSelector(state => state.userReducers);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonSize}
        onPress={() => dispatch(fetchUsersAction())}>
        <View>
          <Text>Fetch Data</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={item => {
          <View>
            <Text>{item.email}</Text>
          </View>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSeparator: {
    height: 1,
    width: '86%',
    backgroundColor: '#CED0CE',
    marginLeft: '14%',
  },
  viewFooter: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
  buttonSize: {
    width: 150,
    height: 45,
    backgroundColor: 'pink',
  },
});
