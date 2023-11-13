import { Text, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

const generateRandomBetween = (min, max, exlude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exlude) {
    return generateRandomBetween(min, max, exlude);
  } else {
    return rndNum;
  }
};

export default function GameScreen({ userNumber }) {
  const initalGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initalGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
