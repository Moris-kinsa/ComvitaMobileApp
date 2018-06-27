import React from "react";
import { AppRegistry, View, StatusBar, StyleSheet ,ScrollView, FlatList, ActivityIndicator,Image  } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";
import HomeScreen from "../HomeScreen";
export default class LucyChat extends React.Component {

    constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }
    componentDidMount(){
        return fetch('https://moris-kinsa.github.io/Pro/assets/catogory.json')
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
            <Label>Lucy Chat</Label>
            <Input />
          </Item>
          <Button rounded danger
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() => navigate("Profile")}>
            <Text>Goto Lucy Profil bhai</Text>
          </Button>
        </Content>
        <ScrollView contentContainerStyle={styles.contentContainer}>
     <View>
     <Text> catogory Name:- {this.state.dataSource.category.description}</Text>
     <View style={{padding:20}}>
     <Text>{this.state.dataSource.childProducts[0].displayName}</Text>
      <Image
         style={{width: 250, height: 250}}
         source={{uri: 'https://www.comvita.com/_assets/product_images/USA/USA111/USA111-Comvita-Manuka-Honey-UMF5-500g-Front-DROP-LARGE.png'}}
       />
      <Text>{this.state.dataSource.childProducts[0].longDescription}</Text>
        <Button full rounded dark
          style={{ marginTop: 10,backgroundColor:'orange' }}
          onPress={() => this.props.navigation.navigate("PDPpage")}>
          <Text>Shop Now</Text>
        </Button>
      </View>
      <View style={{padding:20}}>
      <Text>{this.state.dataSource.childProducts[1].displayName}</Text>
         <Image
            style={{width: 350, height: 350}}
            source={{uri: 'https://www.comvita.com/_assets/product_images/USA/USA111/USA111-Comvita-Manuka-Honey-UMF5-500g-Front-DROP-LARGE.png'}}
          />
        <Text>{this.state.dataSource.childProducts[1].longDescription}</Text>
          <Button full rounded dark
            style={{ marginTop: 10,backgroundColor:'orange' }}
            onPress={() => this.props.navigation.navigate("PDPpage")}>
            <Text>Shop Now</Text>
          </Button>
        </View>
        <View style={{padding:20}}>
           <Text>morisa saifi {this.state.dataSource.childProducts[2].displayName}</Text>
            <Image
               style={{width: 350, height: 350}}
               source={{uri: 'https://www.comvita.com/_assets/product_images/USA/USA111/USA111-Comvita-Manuka-Honey-UMF5-500g-Front-DROP-LARGE.png'}}
             />
           <Text>{this.state.dataSource.childProducts[2].longDescription}</Text>
             <Button full rounded dark
               style={{ marginTop: 10,backgroundColor:'orange' }}
               onPress={() => this.props.navigation.navigate("PDPpage")}>
               <Text>Shop Now</Text>
             </Button>
           </View>
           <View style={{padding:20}}>
              <Text>morisa saifi {this.state.dataSource.childProducts[3].displayName}</Text>
               <Image
                  style={{width: 350, height: 350}}
                  source={{uri: 'https://www.comvita.com/_assets/product_images/USA/USA111/USA111-Comvita-Manuka-Honey-UMF5-500g-Front-DROP-LARGE.png'}}
                />
              <Text>morisa saifi {this.state.dataSource.childProducts[3].longDescription}</Text>
                <Button full rounded dark
                  style={{ marginTop: 10,backgroundColor:'orange' }}
                  onPress={() => this.props.navigation.navigate("PDPpage")}>
                  <Text>Shop Now</Text>
                </Button>
              </View>
              <View style={{padding:20}}>
                 <Text>morisa saifi {this.state.dataSource.childProducts[4].displayName}</Text>
                  <Image
                     style={{width: 350, height: 350}}
                     source={{uri: 'https://www.comvita.com/_assets/product_images/USA/USA111/USA111-Comvita-Manuka-Honey-UMF5-500g-Front-DROP-LARGE.png'}}
                   />
                 <Text> {this.state.dataSource.childProducts[4].longDescription}</Text>
                   <Button full rounded dark
                     style={{ marginTop: 10,backgroundColor:'orange' }}
                     onPress={() => this.props.navigation.navigate("PDPpage")}>
                     <Text>Shop Now</Text>
                   </Button>
                 </View>
                 <View style={{padding:20}}>
                    <Text> {this.state.dataSource.childProducts[5].displayName}</Text>
                     <Image
                        style={{width: 350, height: 350}}
                        source={{uri: 'https://www.comvita.com/_assets/product_images/USA/USA111/USA111-Comvita-Manuka-Honey-UMF5-500g-Front-DROP-LARGE.png'}}
                      />
                    <Text> {this.state.dataSource.childProducts[5].longDescription}</Text>
                      <Button full rounded dark
                        style={{ marginTop: 10,backgroundColor:'orange' }}
                        onPress={() => this.props.navigation.navigate("PDPpage")}>
                        <Text>Shop Now</Text>
                      </Button>
                    </View>
                    <View style={{padding:20}}>
                       <Text> {this.state.dataSource.childProducts[6].displayName}</Text>
                        <Image
                           style={{width: 350, height: 350}}
                           source={{uri: 'https://www.comvita.com/_assets/product_images/USA/USA111/USA111-Comvita-Manuka-Honey-UMF5-500g-Front-DROP-LARGE.png'}}
                         />
                       <Text>{this.state.dataSource.childProducts[6].longDescription}</Text>
                         <Button full rounded dark
                           style={{ marginTop: 10,backgroundColor:'orange' }}
                           onPress={() => this.props.navigation.navigate("PDPpage")}>
                           <Text>Shop Now</Text>
                         </Button>
                       </View>
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
