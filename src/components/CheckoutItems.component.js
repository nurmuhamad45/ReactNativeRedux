import React, { Component } from "react";

import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";

import CartItems from "./CartItems.component";
import CustomerForm from "./CustomerForm.component";

class CheckoutItems extends Component {
  render() {
    const { cartItems, navigation, cartTotal } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.annouc}>
          <Text style={styles.anncText}>Periksa pesanan sebelum checkout</Text>
        </View>
        <View style={styles.ckitems}>
          <FlatList data={cartItems} renderItem={({ item, index }) => <CartItems item={item} index={index} />} keyExtractor={(item) => item.id} ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: "#F6F6F6" }} />} />
          <Text style={styles.text}>Total: $ {cartTotal.toFixed(2)}</Text>
        </View>
        <View style={styles.custForm}>
          <ScrollView>
            <CustomerForm navigation={navigation} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  custForm: {
    flex: 1,
  },
  ckitems: {
    height: 150,
  },
  annouc: {
    padding: 12,
    borderRadius: 5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "right",
    color: "#FA7F08",
    fontSize: 16,
    paddingRight: 20,
  },
  anncText: {
    textAlign: "center",
    color: "#101820",
    fontSize: 16,
  },
});

export default CheckoutItems;
