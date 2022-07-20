// import { Image } from "react-native";
// import React from "react";

// import Onboarding from "react-native-onboarding-swiper";

// const Simple = () => (
//   <Onboarding
//     onDone={() => console.log("done")}
//     pages={[
//       {
//         backgroundColor: "#fff",
//         image: <Image source={require("./images/circle.png")} />,
//         title: "Onboarding",
//         subtitle: "Done with React Native Onboarding Swiper",
//       },
//       {
//         backgroundColor: "#fe6e58",
//         image: <Image source={require("./images/square.png")} />,
//         title: "The Title",
//         subtitle: "This is the subtitle that sumplements the title.",
//       },
//       {
//         backgroundColor: "#999",
//         image: <Image source={require("./images/triangle.png")} />,
//         title: "Triangle",
//         subtitle: "Beautiful, isn't it?",
//       },
//     ]}
//   />
// );
// <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>;

// export default Simple;

// import React from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// const Onboarding = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text>Onboarding</Text>
//       <Button title="Next" onPress={() => navigation.navigate("Login")} style={styles.button} />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: "#018AEB",
//   },
// });

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Onboarding = ({ navigation }) => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("./images/circle.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fe6e58",
          image: <Image source={require("./images/square.png")} />,
          title: "The Title",
          subtitle: "This is the subtitle that sumplements the title.",
        },
        {
          backgroundColor: "#999",
          image: <Image source={require("./images/triangle.png")} />,
          title: "Triangle",
          subtitle: "Beautiful, isn",
        },
      ]}
    />
  );
};
export default Onboarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red ",
  },
});
