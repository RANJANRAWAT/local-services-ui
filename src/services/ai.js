import OpenAI from "openai";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

let client = null;

if (API_KEY) {
    client = new OpenAI({
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true // Required for client-side usage
    });
}

export const generateResponse = async (prompt) => {
    if (!API_KEY) {
        return "⚠️ API Key Missing. Please add `VITE_OPENAI_API_KEY` to your .env file.";
    }

    try {
        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error("OpenAI API Error:", error);

        let errorMessage = "Connection Error.";

        if (error.status === 401) {
            errorMessage = "❌ Invalid API Key. Please check your .env file.";
        } else if (error.status === 429) {
            errorMessage = "❌ Quota Exceeded. You ran out of OpenAI credits.";
        } else {
            errorMessage = `❌ Error: ${error.message}`;
        }

        return errorMessage;
    }
};
