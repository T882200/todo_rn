/**
 * @providesModule P
 */

import React from "react";
import { Text } from "react-native";
import { Font } from "expo";

const P = (props) => (
  <Text {...props} style={[{ fontFamily: "lato-regular" }, props.style]}>
    {props.children}
  </Text>
);
export default P;