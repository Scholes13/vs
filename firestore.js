import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmV4SA8VvhJKFpD8EPrXHHf1CWxKWBzrk",
  authDomain: "stotextwg.firebaseapp.com",
  projectId: "stotextwg",
  storageBucket: "stotextwg.appspot.com",
  messagingSenderId: "901814237733",
  appId: "1:901814237733:web:24359f09ff8cc75c6e9dcc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function saveTranscript(text) {
  if (!text) {
    throw new Error("Transcript text is empty or null");
  }
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

async function getTranscripts() {
  try {
    const querySnapshot = await getDocs(collection(db, "transcripts"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().transcript}`);
    });
  } catch (e) {
    console.error("Error retrieving documents: ", e);
  }
}

export { saveTranscript, getTranscripts };