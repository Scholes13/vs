import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmV4SA8VvhJKFpD8EPrXHHf1CWxKWBzrk",
  authDomain: "stotextwg.firebaseapp.com",
  projectId: "stotextwg",
  storageBucket: "stotextwg.appspot.com",
  messagingSenderId: "901814237733",
  appId: "1:901814237733:web:24359f09ff8cc75c6e9dcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to save transcript to Firestore
async function saveTranscript(text) {
  try {
    const docRef = await addDoc(collection(db, "transcripts"), {
      transcript: text,
      timestamp: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Function to retrieve transcripts from Firestore
async function getTranscripts() {
  const querySnapshot = await getDocs(collection(db, "transcripts"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().transcript}`);
  });
}

saveTranscript("This is a test transcript");