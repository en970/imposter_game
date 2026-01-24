import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, set, get, onValue, update } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFNfEEcJUL3Z_ms2ImZAAhNX5T-qy9rEY",
    authDomain: "imposter-game-f3339.firebaseapp.com",
    // Try US region format (most common default)
    databaseURL: "https://imposter-game-f3339-default-rtdb.firebaseio.com",
    projectId: "imposter-game-f3339",
    storageBucket: "imposter-game-f3339.firebasestorage.app",
    messagingSenderId: "854309145387",
    appId: "1:854309145387:web:0ba326087349468d4a936e"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const database = getDatabase(app);

// References
export const roomRef = (roomCode: string) => ref(database, `rooms/${roomCode}`);
export const playersRef = (roomCode: string) => ref(database, `rooms/${roomCode}/players`);
export const playerRef = (roomCode: string, odaPlayerId: string) => ref(database, `rooms/${roomCode}/players/${odaPlayerId}`);

// Create a new room
export const createRoomInFirebase = async (roomCode: string, hostId: string, hostName: string) => {
    const roomData = {
        hostId,
        gameState: 'lobby',
        secretWord: '',
        category: '',
        imposterCount: 1,
        timerDuration: 120,
        timer: 120,
        currentPlayerIndex: 0,
        createdAt: Date.now(),
        players: {
            [hostId]: {
                name: hostName,
                odaRole: null,
                hasSeenCard: false,
                odaTimestamp: Date.now()
            }
        }
    };

    await set(roomRef(roomCode), roomData);
    return roomData;
};

// Join an existing room
export const joinRoomInFirebase = async (roomCode: string, odaPlayerId: string, playerName: string) => {
    const playerData = {
        name: playerName,
        odaRole: null,
        hasSeenCard: false,
        odaTimestamp: Date.now()
    };

    await set(playerRef(roomCode, odaPlayerId), playerData);
    return playerData;
};

// Update room state
export const updateRoomState = async (roomCode: string, updates: Record<string, unknown>) => {
    await update(roomRef(roomCode), updates);
};

// Update player data
export const updatePlayerData = async (roomCode: string, odaPlayerId: string, updates: Record<string, unknown>) => {
    await update(playerRef(roomCode, odaPlayerId), updates);
};

// Subscribe to room changes
export const subscribeToRoom = (roomCode: string, callback: (data: unknown) => void) => {
    const unsubscribe = onValue(roomRef(roomCode), (odaSnapshot) => {
        const data = odaSnapshot.val();
        callback(data);
    });
    return unsubscribe;
};

// Check if room exists
export const checkRoomExists = async (roomCode: string): Promise<boolean> => {
    const odaSnap = await get(roomRef(roomCode));
    return odaSnap.exists();
};

export { database };
