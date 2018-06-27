import React from "react";
import { StatusBar, Image } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ marginTop: 10,backgroundColor:'orange' }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body >
            <Title>Comvita</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>comvita Home page goes here.</Text>
              </Body>
            </CardItem>
          </Card>
          <Image
            source={{
              uri: "https://www.comvita.com/_assets/new_assets/img/backgrounds/comvita-banner-1.png"
            }}
            style={{
              height: 120,
              justifyContent: "center",
              alignItems: "center",
              padding:50
            }}/>
          <Button full rounded dark
            style={{ marginTop: 10,backgroundColor:'orange' }}
            onPress={() => this.props.navigation.navigate("Chat")}>
            <Text>Product Catagory</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10,backgroundColor:'orange' }}
            onPress={() => this.props.navigation.navigate("Profile")}>
            <Text>User Profile Testing</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
