import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        android_ripple={{ color: "#1d0839" }}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#530acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
