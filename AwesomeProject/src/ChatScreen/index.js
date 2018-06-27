import React, { Component } from "react";
import plpPage from "./plpPage.js";
import cartPage from "./cartPage.js";
import feedBack from "./feedBack.js";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    plpPage: { screen: plpPage },
    cartPage: { screen: cartPage },
    feedBack: { screen: feedBack }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab style={{backgroundColor:'#ffbf00', color:'black'}}>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("plpPage")}>

              <Text>plp</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("cartPage")}>

              <Text>pdp</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("feedBack")}>
              <Text>cart</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
