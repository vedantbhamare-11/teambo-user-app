import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

// Sample collaborators and clients list to search from
const collaboratorsList = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Davis",
  "Daniela Edwards",
];
const clientsList = ["Acme Corp", "Globex Inc", "Soylent Corp", "Initech"];

// Simple searchable dropdown component
const SearchableDropdown = ({
  data,
  value,
  onChange,
  placeholder,
}: {
  data: string[];
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [filteredData, setFilteredData] = useState<string[]>(data);

  const onChangeText = (text: string) => {
    onChange(text);
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)} // slight delay to allow selection
      />
      {isFocused && filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item}
          style={styles.dropdown}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onChange(item);
                setIsFocused(false);
              }}
              style={styles.dropdownItem}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const CreateProjectScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [collaborator, setCollaborator] = useState("");
  const [client, setClient] = useState("");

  // Add your submit handler here

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      {/* Project Name */}
      <Text style={styles.label}>Project Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter project name"
        value={title}
        onChangeText={setTitle}
      />
      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.description}
        multiline
        placeholder="Project description"
        value={description}
        onChangeText={setDescription}
      />
      {/* Collaborators Searchable Dropdown */}
      <Text style={styles.label}>Collaborators</Text>
      <SearchableDropdown
        data={collaboratorsList}
        value={collaborator}
        onChange={setCollaborator}
        placeholder="Search collaborators"
      />
      {/* Clients Searchable Dropdown */}
      <Text style={styles.label}>Clients</Text>
      <SearchableDropdown
        data={clientsList}
        value={client}
        onChange={setClient}
        placeholder="Search clients"
      />
      {/* Create Button */}
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create Project</Text>
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
  description: {
    height: 104,
    fontSize: 15,
    color: "#232323",
    marginVertical: 12,
    backgroundColor: "#f7f7fa",
    borderRadius: 12,
    paddingHorizontal: 14,
    textAlignVertical: "top",
  },
  dropdown: {
    maxHeight: 140,
    marginTop: 4,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 4,
    shadowColor: "#666",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 3 },
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
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

export default CreateProjectScreen;
