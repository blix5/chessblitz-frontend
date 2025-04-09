import React, { useState, useEffect } from 'react';
import { fetchRandomPuzzle } from '@/components/RandomPuzzle';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Chessboard from 'react-native-chessboard';
import { ThemedText } from './ThemedText';

export default function ChessboardDemo() {
    const [puzzle, setPuzzle] = useState<any | undefined>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const getPuzzle = async () => {
        try {
            const data = await fetchRandomPuzzle(); // Fetch the puzzle JSON
            setPuzzle(data); // Set the puzzle data
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred'); // Set the error message
        } finally {
            setLoading(false); // Stop loading
        }
    };
    getPuzzle();
    }, []);

    if (loading) {
        return (
            <>
                <ThemedText style={{ color: '#fff' }}>Loading...</ThemedText>
                <ActivityIndicator size="large" color="#fff" />
            </>
        );
    }
    if(error) {
        return (
            <View>
                <Text>Error: {error}</Text>
            </View>
        );
    }
    return (
        <GestureHandlerRootView style={styles.boardContainer}>
            <Chessboard
                colors={{ black: '#454A64', white: '#FFF37E' }}
                fen={puzzle.FEN} // Pass the fetched FEN to the chessboard
            />
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    boardContainer: {
        marginTop: -10,
        borderRadius: 2,
        overflow: 'hidden',
    },
});