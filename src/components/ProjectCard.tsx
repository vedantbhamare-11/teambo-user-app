// src/components/ProjectCard.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type ProjectCardProps = {
  title: string;
  description: string;
  memberAvatars?: string[];
  memberCount?: number;
  clientName?: string;
  style?: object;
};

const ProjectCard = ({
  title,
  description,
  memberAvatars = [],
  memberCount,
  clientName,
  style,
}: ProjectCardProps) => {
  return (
    <View style={[styles.cardContainer, style]}>
      <View style={styles.topSection}>
        <Text style={styles.projectTitle}>{title}</Text>
        <Text style={styles.projectDescription}>{description}</Text>
      </View>
      <View style={styles.bottomSection}>
        <View>
          <Text style={styles.clientName}>{clientName}</Text>
        </View>
        <View style={styles.avatarRow}>
          {memberAvatars.slice(0, 3).map((uri, idx) => (
            <Image
              key={idx}
              source={{ uri }}
              style={[styles.avatar, { left: idx * -12 }]}
            />
          ))}
          {memberCount && memberCount > 3 && (
            <View
              style={[
                styles.avatar,
                styles.avatarCount,
                { position: "relative", left: memberAvatars.length * -12 },
              ]}
            >
              <Text style={styles.avatarCountText}>{`${memberCount}+`}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 180,
    height: 140,
    borderRadius: 12,
    marginRight: 20,
    marginVertical: 6,
    elevation: 4,
    shadowColor: "#22223b",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    backgroundColor: "#6078ea",
  },
  topSection: {
    padding: 18,
    paddingBottom: 10,
  },
  projectTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    marginBottom: 2,
  },
  projectDescription: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
  },
  bottomSection: {
    backgroundColor: "#fff",
    padding: 12,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: "space-between", // keep space between client name and avatars
  },
  avatarRow: {
    flexDirection: "row",
    position: "absolute",
    right: -24,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#e3e7ef",
    borderWidth: 2,
    borderColor: "#fff",
    zIndex: 1,
  },
  avatarCount: {
    backgroundColor: "#e3e7ef",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarCountText: {
    color: "#22223b",
    fontWeight: "600",
    fontSize: 10,
  },
  clientName: {
    color: "#22223b",
    fontWeight: "600",
    fontSize: 12,
  },
});

export default ProjectCard;
