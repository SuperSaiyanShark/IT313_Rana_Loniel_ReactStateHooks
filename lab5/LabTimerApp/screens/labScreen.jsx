import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PracticeTracker from '../components/practiceTracker';
import Stopwatch from '../components/stopwatch';
import { useStopwatch } from '../hooks/useStopwatch';

export default function LabScreen() {
    const [solved, setSolved] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const seconds = useStopwatch(isRunning);

    const handleSolve = () => {
        setSolved((s) => s + 1);
    };

    const handleReset = () => {
        setSolved(0);
    };

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Lab Timer & Practice Tracker</Text>
            <PracticeTracker
                solved={solved}
                onSolve={handleSolve}
                onReset={handleReset}
            />

            <Stopwatch
                seconds={seconds}
                isRunning={isRunning}
            />

            <View style={styles.controlRow}>
                <TouchableOpacity style={styles.startButton} onPress={handleStart}>
                    <Text style={styles.controlButtonText}>Start Timer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
                    <Text style={styles.controlButtonText}>Stop Timer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F7FAFC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1A202C',
        marginBottom: 20,
        textAlign: 'center',
    },
    controlRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    startButton: {
        backgroundColor: '#38A169',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        flex: 1,
        marginRight: 8,
        alignItems: 'center',
    },
    stopButton: {
        backgroundColor: '#D69E2E',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        flex: 1,
        marginLeft: 8,
        alignItems: 'center',
    },
    controlButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});