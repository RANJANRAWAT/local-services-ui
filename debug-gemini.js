import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import fs from 'fs';

// Manually parsing .env because we are running with node, not vite
try {
    const envConfig = dotenv.parse(fs.readFileSync('.env'));
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
} catch (e) {
    console.log("Could not read .env file");
}

const API_KEY = process.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.error("No API Key found in .env");
    process.exit(1);
}

console.log("Using Key ending in:", API_KEY.slice(-4));

const genAI = new GoogleGenerativeAI(API_KEY);

async function listModels() {
    try {
        // There isn't a direct listModels method exposed easily in the high-level SDK 
        // without using the model manager, but we can try to hit a known model to see the error,
        // or better yet, just try to generate with gemini-2.0-flash-exp or similar.

        // Actually, let's just try to generate with flash and log the FULL error
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        console.log("Trying gemini-1.5-flash...");
        const result = await model.generateContent("Test");
        console.log("Success with gemini-1.5-flash");
    } catch (error) {
        console.log("Failed with gemini-1.5-flash:", error.message);
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        console.log("Trying gemini-pro...");
        const result = await model.generateContent("Test");
        console.log("Success with gemini-pro");
    } catch (error) {
        console.log("Failed with gemini-pro:", error.message);
    }
}

listModels();
