import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Navbar from "../assets/components/Navbar";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/types";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

const PROFILE_DATA = {
  name: "Joshep Andrew",
  role: "UI/UX Designer",
  projectsDone: 2209,
  projectsPending: 80,
  location: "Street 14, Seokarno hatta",
  localTime: "Mei 29 2022, 19:25 AM",
  email: "anonymous321@gmail.com",
  phone: "+01 123454256",
  profilePic: require("../assets/profile-pic.jpg"), // replace with your image asset
};

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.avatarRow}>
          <View style={styles.metricCol}>
            <Text style={styles.metricNumber}>{PROFILE_DATA.projectsDone}</Text>
            <Text style={styles.metricLabel}>Project Done</Text>
          </View>
          <Image source={PROFILE_DATA.profilePic} style={styles.avatar} />
          <View style={styles.metricCol}>
            <Text style={styles.metricNumber}>
              {PROFILE_DATA.projectsPending}
            </Text>
            <Text style={styles.metricLabel}>Project Pending</Text>
          </View>
        </View>

        <Text style={styles.name}>{PROFILE_DATA.name}</Text>
        <Text style={styles.role}>{PROFILE_DATA.role}</Text>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="user-plus" size={20} color="#5d6efd" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="more-horizontal" size={20} color="#5d6efd" />
          </TouchableOpacity>
        </View>

        {/* Info Cards */}
        <View style={styles.infoCard}>
          <View style={styles.infoIconWrap}>
            <Feather name="map-pin" size={20} color="#ffd85e" />
          </View>
          <View>
            <Text style={styles.infoLabel}>Location</Text>
            <Text style={styles.infoValue}>{PROFILE_DATA.location}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoIconWrap}>
            <Feather name="clock" size={20} color="#2de2a9" />
          </View>
          <View>
            <Text style={styles.infoLabel}>Local Time</Text>
            <Text style={styles.infoValue}>{PROFILE_DATA.localTime}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoIconWrap}>
            <MaterialIcons name="email" size={20} color="#ff6f9d" />
          </View>
          <View>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{PROFILE_DATA.email}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoIconWrap}>
            <FontAwesome5 name="phone-alt" size={18} color="#f58949" />
          </View>
          <View>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>{PROFILE_DATA.phone}</Text>
          </View>
        </View>
      </View>
      <Navbar
        activeIndex={3}
        onTabPress={(idx) => {
          if (idx === 0) navigation.navigate("Home");
        }}
        onFabPress={() => {
          navigation.navigate("CreateTask");
        }}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f9fafd" },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 22,
    paddingTop: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#212121",
    marginBottom: 14,
    letterSpacing: 0.3,
  },
  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: "90%",
    justifyContent: "space-between",
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 20,
    backgroundColor: "#ececec",
  },
  metricCol: { alignItems: "center", width: 84 },
  metricNumber: { fontSize: 22, fontWeight: "700", color: "#212151" },
  metricLabel: {
    fontSize: 13,
    color: "#adb0be",
    marginTop: 1,
    textAlign: "center",
  },
  name: {
    fontSize: 21,
    fontWeight: "700",
    color: "#232323",
    marginTop: 8,
    marginBottom: 2,
    textAlign: "center",
  },
  role: { fontSize: 15, color: "#a3a5b8", marginBottom: 14, fontWeight: "600" },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    gap: 11,
  },
  editButton: {
    backgroundColor: "#4f6ffb",
    borderRadius: 9,
    paddingHorizontal: 22,
    paddingVertical: 10,
    marginHorizontal: 7,
    marginBottom: 3,
    shadowColor: "#4f6ffb44",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 5,
  },
  editButtonText: { color: "#fff", fontWeight: "700", fontSize: 15 },
  iconButton: {
    backgroundColor: "#f5f7ff",
    borderRadius: 9,
    paddingHorizontal: 17,
    paddingVertical: 10,
    marginHorizontal: 7,
    marginBottom: 3,
    alignItems: "center",
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7fa",
    borderRadius: 14,
    padding: 16,
    marginVertical: 7,
    marginHorizontal: 0,
    width: "100%",
    shadowColor: "#ebeefd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.035,
    shadowRadius: 2,
  },
  infoIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    shadowColor: "#e9ecf3",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.09,
    shadowRadius: 2,
  },
  infoLabel: { color: "#7c82a1", fontSize: 13, fontWeight: "700" },
  infoValue: {
    color: "#22223b",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 1,
  },
});

export default ProfileScreen;
