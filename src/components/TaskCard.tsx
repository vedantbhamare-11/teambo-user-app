// src/components/TaskCard.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TaskCardProps = {
  title: string;
  subtitle: string;
  time?: string;
  status?: string;
};

const TaskCard = ({ title, subtitle, time, status }: TaskCardProps) => {
  return (
    <View style={styles.taskCard}>
      <Text style={styles.taskTitle}>{title}</Text>
      <Text style={styles.taskSubtitle}>{subtitle}</Text>
      <View style={styles.divider} />
      <View style={styles.bottomRow}>
        {time && (
          <View style={styles.timeWrapper}>
            <MaterialCommunityIcons name="clock-outline" size={15} color="#4686f5" />
            <Text style={styles.taskTime}>{time}</Text>
          </View>
        )}
        {status && (
          <View style={styles.statusChip}>
            <Text style={styles.statusText}>{status}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: "#fff",
    marginHorizontal: 18,
    marginBottom: 18,
    padding: 18,
    borderRadius: 16,
    // Shadow for iOS and elevation for Android
    shadowColor: "#22223b",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#262939",
    marginBottom: 2,
  },
  taskSubtitle: {
    fontSize: 14,
    color: "#7a7e8a",
    marginBottom: 12,
    fontWeight: "500",
  },
  divider: {
    height: 1.5,
    backgroundColor: "#e9eaf0",
    borderRadius: 100,
    marginBottom: 14,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
  },
  timeWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskTime: {
    fontSize: 12,
    color: "#25295a",
    marginLeft: 6,
    fontWeight: "500",
  },
  statusChip: {
    backgroundColor: "#4686f5",
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 6,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
});

export default TaskCard;
