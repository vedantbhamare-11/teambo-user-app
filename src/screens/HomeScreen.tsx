import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: '#f0f4f8', flex: 1 }}>
      <View style={styles.headerWrap}>
        <Text style={styles.greeting}>Hello Josh</Text>
        <Text style={styles.date}>August 16, 2025</Text>
      </View>

      <View style={styles.searchWrap}>
        <Text style={styles.searchText}>Find your task</Text>
      </View>

      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionHeader}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryRow}>
        <View style={[styles.categoryCard, styles.categoryCardTeal]}>
          <Text style={styles.categoryTitle}>Web Design</Text>
          <Text style={styles.categorySub}>12 Projects</Text>
          <View style={styles.progressBarWrap}>
            <View style={[styles.progressBar, { width: '60%' }]} />
            <Text style={styles.progressText}>60%</Text>
          </View>
        </View>
        <View style={[styles.categoryCard, styles.categoryCardIndigo]}>
          <Text style={styles.categoryTitle}>Web Development</Text>
          <Text style={styles.categorySub}>24 Projects</Text>
          <View style={styles.progressBarWrap}>
            <View style={[styles.progressBar, { width: '45%' }]} />
            <Text style={styles.progressText}>45%</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionHeader}>My Task <Text style={styles.taskCount}>4</Text></Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskCard}>
        <Text style={styles.taskTitle}>Landing Page Agency Creative</Text>
        <Text style={styles.taskSubtitle}>Web Design</Text>
        <View style={styles.taskTimeRow}>
          <Text style={styles.taskTime}>🕒 10:00 – 12:30 am</Text>
          <View style={styles.statusChip}><Text style={styles.statusText}>On Progress</Text></View>
        </View>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskTitle}>React JS for E-Commerce Web</Text>
        <Text style={styles.taskSubtitle}>Web Design</Text>
      </View>

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabPlus}>+</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const tealGradient = ['#17ead9', '#6078ea'];
const indigoGradient = ['#6078ea', '#8b50ff'];

const styles = StyleSheet.create({
  headerWrap: {
    marginTop: 28,
    marginLeft: 20,
    marginBottom: 8,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '700',
    color: '#22223b',
  },
  date: {
    fontSize: 14,
    color: '#4a4e69',
    marginTop: 2,
  },
  searchWrap: {
    marginHorizontal: 18,
    marginBottom: 16,
    backgroundColor: '#e9ecef',
    borderRadius: 16,
    padding: 12,
  },
  searchText: {
    color: '#888',
    fontSize: 15,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 6,
  },
  sectionHeader: {
    fontWeight: '600',
    fontSize: 18,
    color: '#22223b',
  },
  taskCount: {
    fontWeight: 'bold',
    color: '#17ead9',
  },
  linkText: {
    color: '#6078ea',
    fontWeight: '500',
    fontSize: 14,
  },
  categoryRow: {
    flexDirection: 'row',
    paddingLeft: 18,
    marginBottom: 14,
  },
  categoryCard: {
    width: 160,
    marginRight: 16,
    padding: 16,
    borderRadius: 20,
    elevation: 2,
  },
  categoryCardTeal: {
    backgroundColor: '#17ead9',
  },
  categoryCardIndigo: {
    backgroundColor: '#6078ea',
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  categorySub: {
    color: '#eef2fb',
    fontSize: 13,
    marginBottom: 10,
  },
  progressBarWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginRight: 8,
  },
  progressText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  taskCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 18,
    borderRadius: 18,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6078ea',
    marginBottom: 3,
  },
  taskSubtitle: {
    fontSize: 13,
    color: '#22223b',
    marginBottom: 10,
  },
  taskTimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTime: {
    fontSize: 13,
    color: '#17ead9',
  },
  statusChip: {
    backgroundColor: '#6078ea',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 26,
    backgroundColor: '#17ead9',
    borderRadius: 32,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  fabPlus: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 38,
  },
});

export default HomeScreen;
