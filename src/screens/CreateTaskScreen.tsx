import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DEFAULT_TAGS = [
  { label: "UI Design", color: "#e8e3fa", textColor: "#8f6cd1" },
  { label: "Web Design", color: "#e8e3fa", textColor: "#8f6cd1" },
  { label: "Designer", color: "#e8e3fa", textColor: "#8f6cd1" },
  { label: "Design Covid 19", color: "#ffe5ec", textColor: "#e45485" },
  { label: "UIUX", color: "#e5f8ef", textColor: "#5fb794" },
  { label: "UX Design", color: "#fff8df", textColor: "#eac14c" },
  { label: "Website", color: "#f3f3f3", textColor: "#63676e" },
  { label: "COVID", color: "#edeaf7", textColor: "#908ec0" },
  { label: "UIUX Designer", color: "#ddecef", textColor: "#2b646a" },
];

const CreateTaskScreen = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [description, setDescription] = useState("");

  // Category entry and management
  const [category, setCategory] = useState("");
  const [allTags, setAllTags] = useState(DEFAULT_TAGS);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // ---- Date/time formatting helpers
  const formattedDate = date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formatTime = (d: Date) =>
    d.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  // ---- Handlers
  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) setDate(selectedDate);
  };
  const onChangeStartTime = (e: any, selectedTime?: Date) => {
    setShowStartTimePicker(Platform.OS === "ios");
    if (selectedTime) setStartTime(selectedTime);
  };
  const onChangeEndTime = (e: any, selectedTime?: Date) => {
    setShowEndTimePicker(Platform.OS === "ios");
    if (selectedTime) setEndTime(selectedTime);
  };

  // Add category (if not empty, not duplicate)
  const handleAddCategory = () => {
    if (
      category.trim() &&
      !allTags.some(
        (t) => t.label.toLowerCase() === category.trim().toLowerCase()
      )
    ) {
      setAllTags((tags) => [
        ...tags,
        {
          label: category.trim(),
          color: "#f3f3f3", // gray bg for user-created by default
          textColor: "#63676e",
        },
      ]);
      setCategory("");
    }
  };

  // Tag selection logic (single-select)
  const handleTagPress = (label: string) => {
    setSelectedTag((curr) => (curr === label ? null : label));
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
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
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <View style={[styles.input, { justifyContent: "center" }]}>
          <Text style={{ color: "#222", fontSize: 15 }}>{formattedDate}</Text>
        </View>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      {/* Time Range */}
      <View style={styles.timeRow}>
        <View style={styles.timeCol}>
          <Text style={styles.labelSmall}>Start time</Text>
          <TouchableOpacity onPress={() => setShowStartTimePicker(true)}>
            <View style={[styles.inputSmall, { justifyContent: "center" }]}>
              <Text style={{ color: "#222", fontSize: 15 }}>
                {formatTime(startTime)}
              </Text>
            </View>
          </TouchableOpacity>
          {showStartTimePicker && (
            <DateTimePicker
              value={startTime}
              mode="time"
              display="default"
              onChange={onChangeStartTime}
              minuteInterval={5}
            />
          )}
        </View>
        <View style={styles.timeCol}>
          <Text style={styles.labelSmall}>End Time</Text>
          <TouchableOpacity onPress={() => setShowEndTimePicker(true)}>
            <View style={[styles.inputSmall, { justifyContent: "center" }]}>
              <Text style={{ color: "#222", fontSize: 15 }}>
                {formatTime(endTime)}
              </Text>
            </View>
          </TouchableOpacity>
          {showEndTimePicker && (
            <DateTimePicker
              value={endTime}
              mode="time"
              display="default"
              onChange={onChangeEndTime}
              minuteInterval={5}
            />
          )}
        </View>
      </View>
      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.description}
        multiline
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      {/* Category Input */}
      <Text style={styles.label}>Add category</Text>
      <View style={styles.categoryInputWrapper}>
        <TextInput
          style={styles.inputCategory}
          placeholder="Website"
          value={category}
          onChangeText={setCategory}
          placeholderTextColor="#bbb"
          onSubmitEditing={handleAddCategory}
        />
        <TouchableOpacity style={styles.addBtn} onPress={handleAddCategory}>
          <Feather name="plus" size={24} color="#bbb" />
        </TouchableOpacity>
      </View>
      {/* Tags */}
      <View style={styles.tagsContainer}>
        {allTags.map((tag) => (
          <TouchableOpacity
            key={tag.label}
            style={[
              styles.tag,
              {
                backgroundColor: tag.color,
                borderWidth: selectedTag === tag.label ? 2 : 0,
                borderColor:
                  selectedTag === tag.label ? "#6c63ff" : "transparent",
              },
            ]}
            onPress={() => handleTagPress(tag.label)}
            activeOpacity={0.85}
          >
            <Text
              style={[
                styles.tagText,
                { color: tag.textColor || "#63676e" },
                selectedTag === tag.label ? { fontWeight: "bold" } : null,
              ]}
            >
              {tag.label}
            </Text>
          </TouchableOpacity>
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
    backgroundColor: "#f7f7fa",
    borderRadius: 12,
    paddingHorizontal: 14,
  },
  categoryInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7fa",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 18,
  },
  inputCategory: {
    flex: 1,
    height: 40,
    backgroundColor: "transparent",
    fontSize: 14,
    color: "#16181d",
    fontWeight: "600",
    borderRadius: 10,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtn: {
    marginLeft: 8,
    backgroundColor: "#ececec",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  tagsContainer: {
    backgroundColor: "#f7f7fa",
    borderRadius: 14,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 18,
  },
  tag: {
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },
  tagText: {
    fontSize: 12,
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
