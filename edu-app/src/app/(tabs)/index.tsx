import Svgcomponent from "@/components/Svgcomponent";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccueilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <View style={{width: 'auto', height: 300,position:"absolute",}}>
        <Svgcomponent style={styles.svg} fill="#000000ff" />
        </View>
       
       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 0,
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 180,
  },
  iconWrapper: {
    width: 96,
    height: 96,
    borderRadius: 24,
    backgroundColor: "rgba(94, 92, 230, 0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  scroll: {
    flex: 1,
    backgroundColor: "#fffefeff",
  },
  scrollContent: {
    flexGrow: 1,
  },
});
