import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import type { Fish } from '../types';

const firebaseConfig = {
  apiKey: "AIzaSyDHV6PgHHlcGbGxJEBOBhWKXgWOBtHGVF8",
  authDomain: "hm-guppy-farm.firebaseapp.com",
  projectId: "hm-guppy-farm",
  storageBucket: "hm-guppy-farm.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789jkl"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Authentication functions
export const loginWithEmail = async (email: string, password: string) => {
  // Check for hardcoded admin credentials
  if (email === 'hm@yash.com' && password === 'yashop884821') {
    try {
      // Create a custom admin user object
      const adminUser = {
        uid: 'admin-uid',
        email: 'hm@yash.com',
        emailVerified: true,
        isAdmin: true
      };
      return adminUser as User;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Authentication failed');
    }
  } else {
    throw new Error('Invalid credentials');
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Storage functions
export async function uploadImage(file: File): Promise<string> {
  const storageRef = ref(storage, `fish-images/${Date.now()}-${file.name}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

// Database functions
export async function addFish(fishData: Omit<Fish, 'id'>) {
  try {
    const docRef = await addDoc(collection(db, 'fishes'), fishData);
    return docRef.id;
  } catch (error) {
    console.error('Error adding fish:', error);
    throw error;
  }
}

export async function getFish(id: string): Promise<Fish> {
  try {
    const docRef = doc(db, 'fishes', id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      throw new Error('Fish not found');
    }
    return { id: docSnap.id, ...docSnap.data() } as Fish;
  } catch (error) {
    console.error('Error getting fish:', error);
    throw error;
  }
}

export async function updateFish(id: string, fishData: Partial<Fish>) {
  try {
    const docRef = doc(db, 'fishes', id);
    await updateDoc(docRef, fishData);
  } catch (error) {
    console.error('Error updating fish:', error);
    throw error;
  }
}

export async function getFishList(): Promise<Fish[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'fishes'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Fish));
  } catch (error) {
    console.error('Error getting fish list:', error);
    throw error;
  }
}

export async function deleteFish(id: string) {
  try {
    await deleteDoc(doc(db, 'fishes', id));
  } catch (error) {
    console.error('Error deleting fish:', error);
    throw error;
  }
}