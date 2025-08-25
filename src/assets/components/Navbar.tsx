import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Pressable,
} from "react-native";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
const ICON_COLOR = "#4686f5";

type NavbarProps = {
  navigation: StackNavigationProp<RootStackParamList>;
  onFabPress?: () => void;
  onTabPress?: (idx: number) => void;
  activeIndex?: number;
};

const Navbar = ({
  onFabPress,
  onTabPress,
  activeIndex = 0,
  navigation,
}: NavbarProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleFabPress = () => {
    setModalVisible(true);
    if (onFabPress) onFabPress();
  };

  const handleClose = () => setModalVisible(false);

  const handleOptionSelect = (option: string) => {
    setModalVisible(false);
    if (option === "Create Task") {
      navigation.navigate("CreateTask");
    }
    // You can add navigation for "Create Category" if needed
  };

  return (
    <>
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
            onPress={() => {
              // Option 1: Call parent's onTabPress if logic is in parent
              onTabPress?.(1);

              // Option 2: Navigate directly if you want to handle it here:
              navigation.navigate("Schedule");
            }}
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
            onPress={() => {
              onTabPress?.(3);
              navigation.navigate("Profile");
            }}
            style={styles.iconWrap}
          >
            <Feather
              name="user"
              size={24}
              color={activeIndex === 3 ? ICON_COLOR : "#a0b7df"}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.fabButton} onPress={handleFabPress}>
          <AntDesign name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Modal Popup */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <Pressable style={styles.modalOverlay} onPress={handleClose}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Create New</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleOptionSelect("Create Task")}
            >
              <Text style={styles.optionText}>Create Task</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleOptionSelect("Create Category")}
            >
              <Text style={styles.optionText}>Create Category</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </>
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

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: 240,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    color: "#22223b",
  },
  optionButton: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: "#f0f4f8",
    marginBottom: 12,
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4686f5",
  },
});

export default Navbar;
