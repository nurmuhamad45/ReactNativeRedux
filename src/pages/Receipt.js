import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React, { Component } from "react";

import { StyleSheet, Text, View, FlatList } from "react-native";

import { connect } from "react-redux";

import OrderSummary from "../components/OrderSummary.component";
import themes from "../styles/theme.style";

class Receipt extends Component {
  getTotal() {
    let total = 0;
    const { items } = this.props;
    for (let i = 0; i < items.length; i++) {
      total = total + items[i].cost;
    }
    return <Text style={styles.totText}>Total: ${total.toFixed(2)}</Text>;
  }

  render() {
    const { customer, items, navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headings}>
          <Text>Invoice for your purchase</Text>
        </View>
        <View style={styles.billings}>
          <Text style={styles.billtext}>Billing details</Text>
          <Text style={styles.text}>{customer.name}</Text>
          <Text style={styles.text}>{customer.phone}</Text>
          <Text style={styles.text}>{customer.email}</Text>
          <Text style={styles.text}>{customer.street}</Text>
        </View>
        <View style={styles.orderSumm}>
          <Text style={styles.billtext}>Order summary</Text>
          <FlatList data={items} renderItem={({ item }) => <OrderSummary item={item} />} keyExtractor={(item) => item.id} ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: "#D9D9D9" }} />} />
          {this.getTotal()}
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
  headings: {
    padding: 12,
    borderRadius: 5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
  orderSumm: {
    flex: 1,
    margin: 10,
  },
  billtext: {
    padding: 6,

    borderRadius: 3,
    backgroundColor: "#ECECEC",
    justifyContent: "center",
    fontSize: 16,
    color: "#101820",
  },
  text: {
    margin: 5,
  },
  billings: {
    height: 130,
    margin: 10,
  },
  totText: {
    textAlign: "right",
    color: "#FA7F08",
    fontSize: 16,
    marginBottom: 100,
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  customer: state.order.order.customer,
  items: state.order.order.items,
});

export default connect(mapStateToProps)(Receipt);
