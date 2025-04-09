import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Chessboard from 'react-native-chessboard';
import { GestureHandlerRootView, Pressable, ScrollView } from 'react-native-gesture-handler';
import { fetchRandomPuzzle } from '@/components/RandomPuzzle';
import ChessboardDemo from '@/components/ChessboardDemo';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

export default function DailyScreen() {
  const router = useRouter();

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <Pressable
          onPress={() => router.push('/puzzles/daily-puzzle')}
        >
          <ThemedText style={{ color: '#fff' }}>
            Daily Puzzle #x
          </ThemedText>
        </Pressable>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  
});