import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PracticeTracker({ solved, onSolve, onReset }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Practice Tracker</Text>
            <Text style={styles.counterText}>Solved: {solved}</Text>

            {solved >= 5 && (
                <Text style={styles.successMessage}>🎉 Great job!</Text>
            )}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.solveButton} onPress={onSolve}>
                    <Text style={styles.buttonText}>Solve +1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.resetButton} onPress={onReset}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom: 10,
    },
    counterText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#1A202C',
        marginBottom: 8,
    },
    successMessage: {
        fontSize: 16,
        color: '#38A169',
        fontWeight: 'bold',
        marginBottom: 12,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    solveButton: {
        backgroundColor: '#3182CE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        flex: 1,
        marginRight: 8,
        alignItems: 'center',
    },
    resetButton: {
        backgroundColor: '#E53E3E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        flex: 1,
        marginLeft: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});