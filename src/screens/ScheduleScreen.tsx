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
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";

type ScheduleScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Schedule"
>;

type Event = {
  hour: string;
  title: string;
  time: string;
  active?: boolean;
};

type ScheduleData = Record<string, Event[]>; // Key: date string, Value: list of events

const INITIAL_SCHEDULES: ScheduleData = {
  // Today's date
  [moment().format("YYYY-MM-DD")]: [
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
  ],
  // Another date, e.g., tomorrow
  [moment().add(1, "day").format("YYYY-MM-DD")]: [
    {
      hour: "09 AM",
      title: "Morning Yoga",
      time: "09:00 - 10:00 AM",
      active: true,
    },
    {
      hour: "12 PM",
      title: "Lunch with Paul",
      time: "12:00 - 13:00 PM",
    },
  ],
};

const ScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [scheduleData, setScheduleData] =
    useState<ScheduleData>(INITIAL_SCHEDULES);
  const navigation = useNavigation<ScheduleScreenNavigationProp>();

  // Format date to yyyy-mm-dd for object keys
  const selKey = selectedDate.format("YYYY-MM-DD");
  const events = scheduleData[selKey] || [];

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Horizontal Calendar Strip */}
        <CalendarStrip
          scrollable
          style={styles.calendarStrip}
          selectedDate={selectedDate}
          onDateSelected={(date) => setSelectedDate(date)}
          calendarColor="#fff"
          calendarHeaderStyle={{ display: "none" }}
          dateNumberStyle={{
            color: "#888aad",
            fontSize: 16,
            fontWeight: "700",
          }}
          dateNameStyle={{ color: "#888aad", fontSize: 13, fontWeight: "500" }}
          highlightDateNumberStyle={{ color: "#fff" }}
          highlightDateNameStyle={{ color: "#fff" }}
          highlightDateContainerStyle={{
            backgroundColor: "#4686f5",
            borderRadius: 12,
          }}
          iconLeftStyle={{ display: "none" }}
          iconRightStyle={{ display: "none" }}
          daySelectionAnimation={{
            type: "background",
            duration: 200,
            highlightColor: "#4686f5",
          }}
        />

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
        </View>

        {/* No Events Message or List */}
        {events.length === 0 ? (
          <View style={styles.noEventsContainer}>
            <Text style={styles.noEventsText}>No events for this day</Text>
          </View>
        ) : (
          <FlatList
            data={events}
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
        )}
      </View>
      <Navbar
        activeIndex={1}
        onTabPress={(idx) => {
          if (idx === 0) navigation.navigate("Home");
        }}
        onFabPress={() => {
          // Example of adding an event to the selected day
          setScheduleData((sd) => ({
            ...sd,
            [selKey]: [
              ...(sd[selKey] || []),
              {
                hour: "08 AM",
                title: "New Event",
                time: "08:00 - 09:00 AM",
                active: false,
              },
            ],
          }));
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
  calendarStrip: {
    height: 94,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#f9fafd",
  },
  noEventsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noEventsText: {
    color: "#bcbcd9",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 36,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  separatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal: 30,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    width: "80%",
    backgroundColor: "#384b84ff", // soft light gray separator
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
