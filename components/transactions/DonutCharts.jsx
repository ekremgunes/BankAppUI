import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import DonutChart from "./chart/DonutChart";
import { calculatePercentage } from "../../utils/calculatePercentage";

const RADIUS = 160;
const STROKE_WIDTH = 26;
const OUTER_STROKE_WIDTH = 45;
const GAP = 0.045;

const DonutChartContainer = () => {
  const spents = [
    { category: "Food", spent: 800, color: "#fe769c" },
    { category: "Transport", spent: 500, color: "#46a0f9" },
    { category: "Entertainment", spent: 600.12, color: "#c3f439" },
    { category: "Shopping", spent: 400, color: "#88dabc" },
    { category: "Bills", spent: 390, color: "#e43433" },
  ];

  const n = spents.length;
  const totalValue = useSharedValue(0);
  const decimals = useSharedValue([]);
  const total = spents.reduce((acc, item) => acc + item.spent, 0);
  const formatCurrency = (value, currency = "USD") =>
    new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
      value
    );

  useEffect(() => {
    const total = spents.reduce((acc, item) => acc + item.spent, 0);
    const percentages = calculatePercentage(
      spents.map((item) => item.spent),
      total
    );
    const generateDecimals = percentages.map((percentage) => percentage / 100);

    totalValue.value = withTiming(total, { duration: 500 });
    decimals.value = generateDecimals;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.chartContainer}>
          <DonutChart
            radius={RADIUS}
            gap={GAP}
            strokeWidth={STROKE_WIDTH}
            outerStrokeWidth={OUTER_STROKE_WIDTH}
            totalValue={totalValue}
            n={n}
            decimals={decimals}
            colors={spents.map((item) => item.color)}
          />
          <View
            className="self-center absolute"
            style={{ marginTop: RADIUS - 20 }}
          >
            <Text className="text-stone-300 text-center">Spent this month</Text>
            <Text className="text-white font-bold text-3xl text-center mt-1">
              {formatCurrency(total)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonutChartContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  chartContainer: {
    width: RADIUS * 2,
    height: RADIUS * 2,
  },
});
