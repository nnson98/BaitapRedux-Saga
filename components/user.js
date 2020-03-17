import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import {
  Item,
  Input,
  Icon,
  Container,
  Header,
  ListItem,
  List,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Button,
} from 'native-base';
import _ from 'lodash';
export default function Home(navigation, props) {
  const [data, setdata] = useState([]);
  const [user, setuser] = useState([]);
  const [allowLoadMore, setallowLoadMore] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState('');
  const [refreshing, setrefreshing] = useState(false);
  const [page, setpage] = useState(1);

  /* useEffect(() => {
    setisLoading(true);
    const api = 'https://reqres.in/api/users?page=' + page;
    fetch(api)
      .then(res => res.json())
      .then(resJson => {
        setisLoading({isLoading: false});
        setdata(data.concat(resJson.data));
        setfulldata(data.concat(resJson.data));
        setrefreshing({refreshing: false});
        resJson.data.length === 6
          ? setallowLoadMore({allowLoadMore: true})
          : setallowLoadMore({allowLoadMore: false});
      })
      .catch(error => {
        seterror(error);
        setisLoading({isLoading: false});
        setrefreshing({refreshing: false});
      });
  }, [page, data]);

  const handleLoadMore = () => {
    if (allowLoadMore === true) {
      setpage(
        page + 1,

        () => data,
      );
    }
  };*/
  const renderSeparator = () => {
    return <View style={styles.viewSeparator} />;
  };
  const renderFooter = () => {
    if (!isLoading) {
      return null;
    }
    return (
      <View style={styles.viewFooter}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
        </Item>
      </Header>
    );
  };
  /*const handleRefresh = () => {
    setdata([]);
    setfulldata([]);
    setpage(1);
    setrefreshing(true);
    () => {
      data;
    };
  };

  const handleSreach = text => {
    const formatQuery = text.toLowerCase();
    const data = _.filter(fulldata, data => {
      if (data.email.includes(formatQuery)) {
        return true;
      } else {
        false;
      }
    });
    setdata([data]);
  };*/
  return (
    <Container>
      <List>
        <FlatList
          data={user}
          renderItem={({item}) => (
            <ListItem avatar>
              <Left>
                <Thumbnail source={{uri: item.avatar}} />
              </Left>
              <Body>
                <Text>
                  {item.first_name} {item.last_name}
                </Text>
                <Text>{item.email}</Text>
              </Body>
              <Right>
                <Icon
                  name="arrow-forward"
                  // onPress={() => navigation.navigate('ReviewDetails', item)}
                />
              </Right>
            </ListItem>
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          refreshing={false}
          //onRefresh={handleRefresh}
          //onEndReachedThreshold={1}
          onEndReached={props.onFetchUser()}
        />
      </List>
    </Container>
  );
}

const styles = StyleSheet.create({
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
});
