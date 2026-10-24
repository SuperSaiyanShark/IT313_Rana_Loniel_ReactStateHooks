import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Stopwatch({ seconds, isRunning }) {
    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        const formattedMins = mins < 10 ? `0${mins}` : mins;
        const formattedSecs = secs < 10 ? `0${secs}` : secs;
        return `${formattedMins}:${formattedSecs}`;
    };

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Lab Stopwatch</Text>
            <Text style={styles.timeText}>{formatTime(seconds)}</Text>

            <Text style={[styles.statusText, isRunning ? styles.running : styles.paused]}>
                {isRunning ? 'Running...' : 'Paused'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2D3748',
        marginBottom: 8,
    },
    timeText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1A202C',
        marginBottom: 8,
        fontVariant: ['tabular-nums'],
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    running: {
        color: '#38A169',
    },
    paused: {
        color: '#DD6B20',
    },
});