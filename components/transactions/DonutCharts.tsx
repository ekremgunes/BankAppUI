/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useFont} from '@shopify/react-native-skia';
import {TouchableOpacity} from 'react-native';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import DonutChart from './chart/DonutChart';
import { generateRandomNumbers } from '../../utils/generateRandomNumbers';
import { calculatePercentage } from '../../utils/calculatePercentage';

interface Data {
  value: number;
  percentage: number;
  color: string;
}

const RADIUS = 160;
const STROKE_WIDTH = 27;
const OUTER_STROKE_WIDTH = 46;
const GAP = 0.05;

export const DonutChartContainer = () => {
  const n = 5;
  const [data, setData] = useState<Data[]>([]);
  const totalValue = useSharedValue(0);
  const decimals = useSharedValue<number[]>([]);
  const colors = ['#fe769c', '#46a0f8', '#c3f439', '#88dabc', '#e43433'];

  const generateData = () => {
    const generateNumbers = generateRandomNumbers(n);
    const total = generateNumbers.reduce(
      (acc, currentValue) => acc + currentValue,
      0,
    );
    const generatePercentages =  calculatePercentage(generateNumbers, total);
    const generateDecimals = generatePercentages.map(
      number => Number(number.toFixed(0)) / 100,
    );
    totalValue.value = withTiming(total, {duration: 1000});
    decimals.value = [...generateDecimals];

    const arrayOfObjects = generateNumbers.map((value, index) => ({
      value,
      percentage: generatePercentages[index],
      color: colors[index],
    }));

    setData(arrayOfObjects);
  };

  useEffect(() => {
    generateData()
  }, [])

  const font = useFont(require('../../assets/fonts/Roboto-Bold.ttf'), 35);
  const smallFont = useFont(require('../../assets/fonts/Roboto-Light.ttf'), 15);

  if (!font || !smallFont) {
    return <View />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.chartContainer}>
          <DonutChart
            radius={RADIUS}
            gap={GAP}
            strokeWidth={STROKE_WIDTH}
            outerStrokeWidth={OUTER_STROKE_WIDTH}
            font={font}
            smallFont={smallFont}
            totalValue={totalValue}
            n={n}
            decimals={decimals}
            colors={colors}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  chartContainer: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    marginTop: 10,
  }
});

export default DonutChartContainer;