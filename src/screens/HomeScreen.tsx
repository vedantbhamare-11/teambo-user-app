import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CategoryCard from "../assets/components/CategoryCard";
import TaskCard from "../assets/components/TaskCard";
import Navbar from "../assets/components/Navbar";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";

const categories = [
  {
    title: "Web Development",
    subtitle: "12 Projects",
    progressPercent: 60,
    memberAvatars: [
      "https://randomuser.me/api/portraits/men/10.jpg",
      "https://randomuser.me/api/portraits/women/11.jpg",
      "https://randomuser.me/api/portraits/men/12.jpg",
    ],
    memberCount: 8,
    backgroundColor: "#17ead9",
  },
  {
    title: "Web Design",
    subtitle: "24 Projects",
    progressPercent: 45,
    memberAvatars: [
      "https://randomuser.me/api/portraits/women/13.jpg",
      "https://randomuser.me/api/portraits/men/14.jpg",
      "https://randomuser.me/api/portraits/women/15.jpg",
    ],
    memberCount: 13,
    backgroundColor: "#6078ea",
  },
  {
    title: "UI/UX",
    subtitle: "10 Projects",
    progressPercent: 75,
    memberAvatars: [
      "https://randomuser.me/api/portraits/men/20.jpg",
      "https://randomuser.me/api/portraits/women/21.jpg",
    ],
    memberCount: 6,
    backgroundColor: "#ff8a65",
  },
];

const tasks = [
  {
    title: "Landing Page Agency Creative",
    subtitle: "Web Design",
    time: "10:00 – 12:30 am",
    status: "On Progress",
  },
  {
    title: "E-Commerce Website Build",
    subtitle: "Development",
    time: "01:00 – 03:00 pm",
    status: "Pending",
  },
  {
    title: "Mobile App UI Revamp",
    subtitle: "UI/UX",
    time: "03:30 – 05:00 pm",
    status: "In Review",
  },
  {
    title: "Dashboard Analytics",
    subtitle: "Data",
    time: "09:00 – 11:00 am",
    status: "On Progress",
  },
];

const HomeScreen = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllTasks, setShowAllTasks] = useState(false);

  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 2);
  const displayedTasks = showAllTasks ? tasks : tasks.slice(0, 3);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="menu" size={28} color="#22223b" />
          </TouchableOpacity>
          <Image
            source={require("../assets/profile-pic.jpg")}
            style={styles.profilePic}
          />
        </View>

        <View style={styles.headerWrap}>
          <Text style={styles.greeting}>Hello Josh</Text>
          <Text style={styles.date}>August 16, 2025</Text>
        </View>

        <View style={styles.searchWrap}>
          <Text style={styles.searchText}>Find your task</Text>
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionHeader}>Categories</Text>
          <TouchableOpacity
            onPress={() => setShowAllCategories(!showAllCategories)}
          >
            <Text style={styles.linkText}>
              {showAllCategories ? "Show Less" : "View All"}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryRow}
        >
          {displayedCategories.map(
            ({
              title,
              subtitle,
              progressPercent,
              memberAvatars,
              memberCount,
              backgroundColor,
            }) => (
              <CategoryCard
                key={title}
                title={title}
                subtitle={subtitle}
                progressPercent={progressPercent}
                memberAvatars={memberAvatars}
                memberCount={memberCount}
                backgroundColor={backgroundColor}
              />
            )
          )}
        </ScrollView>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionHeader}>My Task</Text>
          <TouchableOpacity
            onPress={() => setShowAllTasks(!showAllTasks)}
          >
            <Text style={styles.linkText}>
              {showAllTasks ? "Show Less" : "View All"}
            </Text>
          </TouchableOpacity>
        </View>

        {displayedTasks.map(
          ({ title, subtitle, time, status }, index) => (
            <TaskCard
              key={`${title}-${index}`}
              title={title}
              subtitle={subtitle}
              time={time}
              status={status}
            />
          )
        )}
      </ScrollView>

      <Navbar
        onFabPress={() => {}}
        onTabPress={(idx) => {}}
        activeIndex={0}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f4f8" },
  scrollView: { flex: 1 },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 10,
  },
  iconButton: { padding: 6 },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1.41,
    elevation: 2,
  },
  headerWrap: { marginLeft: 20, marginBottom: 8 },
  greeting: { fontSize: 22, fontWeight: "700", color: "#22223b" },
  date: { fontSize: 14, color: "#4a4e69", marginTop: 2 },
  searchWrap: {
    marginHorizontal: 18,
    marginBottom: 16,
    backgroundColor: "#e9ecef",
    borderRadius: 16,
    padding: 12,
  },
  searchText: { color: "#888", fontSize: 15 },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 6,
  },
  sectionHeader: {
    fontWeight: "600",
    fontSize: 18,
    color: "#22223b",
    marginBottom: 6,
  },
  linkText: { color: "#6078ea", fontWeight: "500", fontSize: 14 },
  categoryRow: { flexDirection: "row", paddingLeft: 18, marginBottom: 14 },
});
export default HomeScreen;
