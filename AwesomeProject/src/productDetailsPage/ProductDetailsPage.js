import React from "react";
import { AppRegistry, View, StatusBar, StyleSheet ,ScrollView, FlatList, ActivityIndicator,Image, TouchableOpacity, Alert  } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";
import HomeScreen from "../HomeScreen";
export default class LucyChat extends React.Component {

    constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }
    componentDidMount(){
        return fetch('https://moris-kinsa.github.io/Pro/assets/testing.json')
          .then((response) => response.json())
          .then((responseJson) => {

            this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){

            });

          })
          .catch((error) =>{
            console.error(error);
          });
      }
      handlePress = async () => {
            fetch('https://162.254.26.197/rest/model/atg/commerce/order/purchase/CartModifierActor/addItemToOrder', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "catalogRefIds": "sku30029",
                    "productId": "prod10004",
                    "locationId": "FashionIsland",
                    "quantity": "1",
                })

          })
              .then((response) => response.json())
              .then((responseJson) => {
                 Alert.alert("Item added to cart");
              })
              .catch((error) => {
                console.error(error);
              });
          }
  render() {
    if(this.state.isLoading){
     return(
       <View style={{flex: 1, padding: 20}}>
         <ActivityIndicator/>
       </View>
     )
   }
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Manuka Honey</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>

          </Item>
          <Button rounded danger
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={this.handlePress.bind(this)}>
            <Text>Goto Lucy Profil bhai</Text>
          </Button>
        </Content>
        <ScrollView contentContainerStyle={styles.contentContainer}>
     <View>
        <Text> {this.state.dataSource.product.displayName}</Text>
        <Image
           style={{width: 350, height: 350}}
           source={{uri: 'https://www.comvita.com/_assets/product_images/USA/USA111/USA111-Comvita-Manuka-Honey-UMF5-500g-Front-DROP-LARGE.png'}}
         />


     <Text> {this.state.dataSource.product.currencyCode}</Text>
     <Text>  {this.state.dataSource.product.lowestSalePrice}</Text>
     <Text> {this.state.dataSource.product.highestSalePrice}</Text>

     <Button full rounded dark
       style={{ marginTop: 10,backgroundColor:'orange' }}
         onPress={this.handlePress.bind(this)}>
       <Text>Add To cart</Text>
     </Button>
     <Text> {this.state.dataSource.product.longDescription}</Text>

     <Text>  {this.state.dataSource.product.repositoryId}</Text>
     <Text>  {this.state.dataSource.product.currencyCode}</Text>



     </View>
     </ScrollView>

      </Container>

    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});
