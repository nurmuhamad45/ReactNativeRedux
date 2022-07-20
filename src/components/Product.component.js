import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import themes from "../styles/theme.style";

class Product extends Component {
  addToCart = () => {
    this.props.addItemsToCart(this.props.item);
  };
  render() {
    const { product } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image source={{ uri: product.picture }} style={{ borderRadius: 5, width: 80, height: 80, resizeMode: "contain" }} />
          <View style={styles.productDes}>
            <Text>{product.title}</Text>
            <Text>Rp. {product.cost.toFixed(2)}</Text>
            {/* <Text>{product.Penulis}</Text> */}
            <TouchableOpacity onPress={this.addToCart} style={styles.addBtn}>
              <Text style={styles.text}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  title: {
    backgroundColor: "red",
  },
  productDes: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: "60%",
  },
  addBtn: {
    borderRadius: 7,
    margin: 10,
    backgroundColor: "#018AEB",
  },
  text: {
    color: "#fff",
    fontSize: 14,
    padding: 10,
  },
});

export default Product;
