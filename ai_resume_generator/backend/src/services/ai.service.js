const {GoogleGenAI} = require("@google/genai")

const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_API_KEY})

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "can you tell your name",
  });
  console.log(response.text);
}

module.exports = main