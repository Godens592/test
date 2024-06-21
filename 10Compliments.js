import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase, ref, push, get } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  databaseURL: "https://first-database-d3f95-default-rtdb.firebaseio.com/"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const complimentsRef = ref(database, "compliments");

// List of initial compliments
const initialCompliments = [
    "Your positivity is infectious.",
    "You have impeccable manners.",
    "I like your style.",
    "You have the best laugh.",
    "I appreciate you.",
    "You are the most perfect you there is.",
    "You are enough.",
    "You're strong.",
    "Your perspective is refreshing.",
    "I'm grateful to know you."
];

// Function to add initial compliments to Firebase
function addInitialCompliments() {
    // Check if any data exists at the 'compliments' reference
    get(complimentsRef).then(snapshot => {
        if (!snapshot.exists()) {
            // If no data exists, add the initial compliments
            initialCompliments.forEach(compliment => {
                push(complimentsRef, compliment)
                    .then(() => console.log("Compliment added successfully: " + compliment))
                    .catch(error => console.error("Failed to add compliment: ", error));
            });
        } else {
            console.log("Initial compliments already added.");
        }
    }).catch(error => {
        console.error("Error checking database: ", error);
    });
}

// Call the function to add compliments if not already added
addInitialCompliments();
