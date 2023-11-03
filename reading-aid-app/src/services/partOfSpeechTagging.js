// services/partOfSpeechTagging.js

const API_BASE_URL = "http://localhost:5000"; // Replace with the base URL of your Flask API

async function partOfSpeechTagging(text) {
  try {
    const response = await fetch(`${API_BASE_URL}/part-of-speech`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("There was an error analyzing part of speech:", error);
    throw error; // Re-throw the error so you can catch it in the component and show feedback to the user
  }
}

export { partOfSpeechTagging };
