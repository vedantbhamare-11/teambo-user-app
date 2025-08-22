// src/components/CategoryCard.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type CategoryCardProps = {
  title: string;
  subtitle: string;
  progressPercent: number; // 0-100
  memberAvatars?: string[]; // array of avatar image URIs
  memberCount?: number; // e.g. 8
  backgroundColor?: string; // solid background color
  style?: object;
};

const CategoryCard = ({
  title,
  subtitle,
  memberAvatars = [],
  memberCount,
  style,
}: CategoryCardProps) => {
  return (
    <View style={[styles.cardContainer, style]}>
      <View style={styles.topSection}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <Text style={styles.categorySub}>{subtitle}</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.avatarRow}>
          {memberAvatars.slice(0, 3).map((uri, idx) => (
            <Image
              key={idx}
              source={{ uri }}
              style={[styles.avatar, { left: idx * -12 }]}
            />
          ))}
          // Inside the component JSX, update avatarCount container style:
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
  categoryTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    marginBottom: 2,
  },
  categorySub: {
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
  },
  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#e3e7ef",
    borderWidth: 2,
    borderColor: "#fff",
    position: "relative",
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
});

export default CategoryCard;
