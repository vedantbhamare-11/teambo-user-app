import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TAGS = [
  { label: "UI Design", color: "#eae2ff" },
  { label: "Web Design", color: "#eae2ff" },
  { label: "Designer", color: "#eae2ff" },
  { label: "Design Covid 19", color: "#ffdada" },
  { label: "UIUX", color: "#e0f7ef" },
  { label: "UX Design", color: "#fff7d4" },
  { label: "Website", color: "#ececec" },
  { label: "COVID", color: "#ececec" },
  { label: "UIUX Designer", color: "#d3e1df" },
];

const CreateTaskScreen = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#22223b" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Web Design"
        value={title}
        onChangeText={setTitle}
      />

      {/* Date */}
      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="Saturday, Mei 28 2022"
        value={date}
        onChangeText={setDate}
      />

      {/* Time Range */}
      <View style={styles.timeRow}>
        <View style={styles.timeCol}>
          <Text style={styles.labelSmall}>Start time</Text>
          <TextInput
            style={styles.inputSmall}
            placeholder="02 : 00"
            value={startTime}
            onChangeText={setStartTime}
            keyboardType="numeric"
          />
          <Text style={styles.pm}>PM</Text>
        </View>
        <View style={styles.timeCol}>
          <Text style={styles.labelSmall}>End Time</Text>
          <TextInput
            style={styles.inputSmall}
            placeholder="04 : 00"
            value={endTime}
            onChangeText={setEndTime}
            keyboardType="numeric"
          />
          <Text style={styles.pm}>PM</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Build a Startup Website Design about Covid-19 with Responsive"
        value={description}
        onChangeText={setDescription}
      />

      {/* Category */}
      <Text style={styles.label}>Add category</Text>
      <View style={styles.categoryRow}>
        <TextInput
          style={styles.inputCategory}
          placeholder="Website"
          value={category}
          onChangeText={setCategory}
        />
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>＋</Text>
        </TouchableOpacity>
      </View>

      {/* Tags */}
      <View style={styles.tagsWrap}>
        {TAGS.map((tag) => (
          <View
            key={tag.label}
            style={[styles.tag, { backgroundColor: tag.color }]}
          >
            <Text
              style={[
                styles.tagText,
                tag.label === "UX Design"
                  ? { color: "#f9c00d" }
                  : tag.label === "Design Covid 19"
                  ? { color: "#e45485" }
                  : tag.label === "UIUX Designer"
                  ? { color: "#0e9d69", fontWeight: "700" }
                  : {},
              ]}
            >
              {tag.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Create Task Button */}
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create a new task</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 16,
  },
  backButton: {
    marginBottom: 12,
    width: 36,
    height: 36,
    justifyContent: "center",
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 6,
    color: "#282c35",
  },
  input: {
    height: 44,
    backgroundColor: "#f7f7fa",
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    marginBottom: 2,
    color: "#222",
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    marginTop: 4,
  },
  timeCol: {
    flex: 1,
    marginRight: 9,
  },
  labelSmall: {
    fontSize: 13,
    marginBottom: 5,
    color: "#605c6a",
  },
  inputSmall: {
    height: 44,
    backgroundColor: "#f7f7fa",
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#222",
  },
  pm: {
    position: "absolute",
    right: 9,
    top: 35,
    fontSize: 13,
    color: "#605c6a",
  },
  description: {
    fontSize: 15,
    color: "#232323",
    marginVertical: 12,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  inputCategory: {
    backgroundColor: "#f7f7fa",
    borderRadius: 12,
    height: 44,
    flex: 1,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#222",
  },
  addBtn: {
    marginLeft: 8,
    backgroundColor: "#e9edea",
    borderRadius: 22,
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  addBtnText: {
    fontSize: 26,
    color: "#bbb",
  },
  tagsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginVertical: 20,
    padding: 8,
    backgroundColor: "#f7f7fa",
    borderRadius: 18,
  },
  tag: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 7,
    marginRight: 10,
    marginBottom: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  tagText: {
    fontSize: 14,
    color: "#606060",
    fontWeight: "600",
  },
  createButton: {
    backgroundColor: "#437af7",
    borderRadius: 12,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  createButtonText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "700",
  },
});

export default CreateTaskScreen;

