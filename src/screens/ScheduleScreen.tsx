import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Navbar from "../assets/components/Navbar";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/types";

// For stack navigator screens
type ScheduleScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Schedule"
>;

const WEEK_DAYS = [
  { day: "Thu", date: 26 },
  { day: "Fri", date: 27 },
  { day: "Sat", date: 28 },
  { day: "Sun", date: 29 },
  { day: "Mon", date: 30 },
  { day: "Tue", date: 31 },
  { day: "Wed", date: 1 },
];

const SCHEDULES = [
  {
    hour: "08 AM",
    title: "Continue Project",
    time: "08:00 - 11:00 am",
    active: true,
  },
  {
    hour: "09 AM",
    title: "Read a book about UI",
    time: "09:00 - 11:00 AM",
  },
  {
    hour: "12 PM",
    title: "Meeting With Client",
    time: "12:00 - 13:30 pm",
  },
  {
    hour: "13 PM",
    title: "Hangout with friends",
    time: "12:00 - 13:30 pm",
  },
  {
    hour: "15 PM",
    title: "Course UI Design",
    time: "15:00 - 16:00 PM",
  },
  {
    hour: "16 PM",
    title: "Coffe Break",
    time: "16:00 - 17:00 PM",
  },
  {
    hour: "17 PM",
    title: "Dinner with Family",
    time: "17:00 - 18:30 PM",
  },
];

const ScheduleScreen = () => {
  const [selectedDay, setSelectedDay] = useState(4); // Highlight Monday
  const navigation = useNavigation<ScheduleScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Week Bar */}
        <View style={styles.weekRow}>
          {WEEK_DAYS.map((day, idx) => (
            <TouchableOpacity
              key={day.day}
              style={[
                styles.weekItem,
                idx === selectedDay && styles.weekActive,
              ]}
              onPress={() => setSelectedDay(idx)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.weekDay,
                  idx === selectedDay && styles.weekActiveText,
                ]}
              >
                {day.day}
              </Text>
              <Text
                style={[
                  styles.weekDate,
                  idx === selectedDay && styles.weekActiveText,
                ]}
              >
                {day.date}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Schedule List */}
        <FlatList
          data={SCHEDULES}
          keyExtractor={(_, i) => `${i}`}
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.itemRow}>
              <Text style={styles.hourText}>{item.hour}</Text>
              <View style={[styles.card, item.active && styles.activeCard]}>
                <Text
                  style={[
                    styles.cardTitle,
                    item.active && styles.activeCardTitle,
                  ]}
                >
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.cardTime,
                    item.active && styles.activeCardTime,
                  ]}
                >
                  {item.time}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <Navbar
        activeIndex={1}
        onTabPress={(idx) => {
          if (idx === 0) navigation.navigate("Home");
          // handle other tabs...
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
    paddingHorizontal: 18,
    paddingTop: 8,
    backgroundColor: "#f9fafd",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 6,
  },
  arrowBack: {
    padding: 4,
    marginRight: 7,
  },
  headerTitle: {
    fontWeight: "700",
    fontSize: 19,
    color: "#22223b",
    textAlign: "center",
    flex: 1,
  },
  weekRow: {
    flexDirection: "row",
    borderRadius: 18,
    height: 58,
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginHorizontal: 4,
    backgroundColor: "#fff",
    marginBottom: 16,
    paddingTop: 5,
    paddingBottom: 2,
    elevation: 2,
  },
  weekItem: {
    flex: 1,
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 6,
    marginHorizontal: 2,
  },
  weekDay: {
    fontSize: 13,
    fontWeight: "500",
    color: "#888aad",
    marginBottom: 0,
  },
  weekDate: {
    fontSize: 15,
    fontWeight: "700",
    color: "#bcbcd9",
  },
  weekActive: {
    backgroundColor: "#4686f5",
    borderRadius: 12,
  },
  weekActiveText: {
    color: "#fff",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 18,
  },
  hourText: {
    width: 44,
    fontSize: 13,
    color: "#c2cadb",
    fontWeight: "700",
    textAlign: "right",
    marginRight: 6,
    marginTop: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginLeft: 7,
    elevation: 2,
    shadowColor: "#bec5db",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#25264a",
    marginBottom: 6,
  },
  cardTime: {
    fontSize: 13,
    color: "#b5b5c3",
    fontWeight: "500",
  },
  activeCard: {
    backgroundColor: "#437af7",
  },
  activeCardTitle: {
    color: "#fff",
  },
  activeCardTime: {
    color: "#eef2f9",
  },
});

export default ScheduleScreen;
