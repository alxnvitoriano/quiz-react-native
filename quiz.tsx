import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correctOption: number;
};

const Quiz = () => {
  const questions: Question[] = [
    {
      question:
        "Qual dos seguintes materiais é mais comumente utilizado na construção de pontes devido à sua alta resistência à tração e compressão?",
      options: ["Concreto", "Alumínio", "Aço", "Madeira"],
      correctOption: 1,
    },

    {
      question:
        "Qual é a unidade de medida de tensão no Sistema Internacional (SI)?",
      options: ["Newton (N)", "Pascal (Pa) ", "Joule (J) ", "Watt (W) "],
      correctOption: 1,
    },

    {
      question:
        "Qual é a unidade de medida de tensão no Sistema Internacional (SI)?",
      options: ["Newton (N)", "Pascal (Pa) ", "Joule (J) ", "Watt (W) "],
      correctOption: 1,
    },

    {
      question:
        "Qual é a unidade de medida de tensão no Sistema Internacional (SI)?",
      options: ["Newton (N)", "Pascal (Pa) ", "Joule (J) ", "Watt (W) "],
      correctOption: 1,
    },

    {
      question:
        "Qual é a unidade de medida de tensão no Sistema Internacional (SI)?",
      options: ["Newton (N)", "Pascal (Pa) ", "Joule (J) ", "Watt (W) "],
      correctOption: 1,
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [score, setScore] = useState(0);

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    selectedOptions.forEach((selectedOption, index) => {
      if (selectedOption === questions[index].correctOption) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    alert(`Você acertou ${calculatedScore} de ${questions.length} perguntas.`);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#00796B" }}>
            Quiz
          </Text>
        </View>

        {questions.map((question, questionIndex) => (
          <View key={questionIndex} style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "gray",
                marginBottom: 10,
              }}
            >
              {question.question}
            </Text>

            {question.options.map((option, optionIndex) => (
              <TouchableOpacity
                key={optionIndex}
                style={{
                  backgroundColor:
                    selectedOptions[questionIndex] === optionIndex
                      ? "#767676"
                      : "#00796B",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 16,
                  marginVertical: 5,
                }}
                onPress={() => handleOptionSelect(questionIndex, optionIndex)}
              >
                <View
                  style={{
                    backgroundColor: "#3EA99F",
                    borderRadius: 9,
                    padding: 9,
                    width: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10,
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    {String.fromCharCode(65 + optionIndex)}
                  </Text>
                </View>
                <Text style={{ color: "#fff", fontWeight: "bold", flex: 1 }}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            marginTop: 20,
            backgroundColor: "#00796B",
            padding: 15,
            borderRadius: 16,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Quiz;
