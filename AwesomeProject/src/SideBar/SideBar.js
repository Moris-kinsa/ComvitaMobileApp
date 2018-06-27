import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home","ShopBy", "Manuka Honey","Olive Leaf Extract","PDPpage","OUR STORY","LEARN MORE","BLOG"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: "https://www.comvita.com/_assets/new_assets/img/logos/logo.png"
            }}
            style={{
              height: 20,
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
              padding:20,
              margin:"auto"
            }}/>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
