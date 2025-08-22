import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const ICON_COLOR = "#4686f5";

const Navbar = ({
  onFabPress,
  onTabPress,
  activeIndex = 0,
}: {
  onFabPress?: () => void;
  onTabPress?: (idx: number) => void;
  activeIndex?: number;
}) => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.tabRow}>
        <TouchableOpacity
          onPress={() => onTabPress?.(0)}
          style={styles.iconWrap}
        >
          <Feather
            name="home"
            size={24}
            color={activeIndex === 0 ? ICON_COLOR : "#a0b7df"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onTabPress?.(1)}
          style={styles.iconWrap}
        >
          <Feather
            name="calendar"
            size={24}
            color={activeIndex === 1 ? ICON_COLOR : "#a0b7df"}
          />
        </TouchableOpacity>

        <View style={styles.fabPlaceholder} />

        <TouchableOpacity
          onPress={() => onTabPress?.(2)}
          style={styles.iconWrap}
        >
          <MaterialCommunityIcons
            name="notebook-outline"
            size={24}
            color={activeIndex === 2 ? ICON_COLOR : "#a0b7df"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onTabPress?.(3)}
          style={styles.iconWrap}
        >
          <Feather
            name="user"
            size={24}
            color={activeIndex === 3 ? ICON_COLOR : "#a0b7df"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.fabButton} onPress={onFabPress}>
        <AntDesign name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#f8f6ff",
    zIndex: 1000,
    shadowColor: "#22223b",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 10,
    paddingBottom: 15,
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 70,
  },
  iconWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fabPlaceholder: {
    width: 50,
  },
  fabButton: {
    position: "absolute",
    alignSelf: "center",
    width: 50,
    height: 50,
    borderRadius: 34,
    backgroundColor: "#4686f5",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#22223b",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 15,
  },
});

export default Navbar;
