import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import ChessboardDemo from '@/components/ChessboardDemo';

export default function DailyPuzzle() {
    const router = useRouter();

    return (
        <ThemedView style={styles.container}>
            <ChessboardDemo />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2D3B',
    },
});