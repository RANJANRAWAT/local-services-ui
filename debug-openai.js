import OpenAI from "openai";
import dotenv from 'dotenv';
import fs from 'fs';

// Manually verify .env reading
try {
    const envConfig = dotenv.parse(fs.readFileSync('.env'));
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
} catch (e) {
    console.log("Could not read .env file");
}

const API_KEY = process.env.VITE_OPENAI_API_KEY;

if (!API_KEY) {
    console.error("No VITE_OPENAI_API_KEY found in .env");
    process.exit(1);
}

console.log("Using Key ending in:", API_KEY.slice(-4));

const client = new OpenAI({
    apiKey: API_KEY,
});

async function testOpenAI() {
    try {
        console.log("Testing OpenAI Connection...");
        const completion = await client.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "gpt-4o-mini",
        });

        console.log("Success! Response:");
        console.log(completion.choices[0].message.content);
    } catch (error) {
        console.error("OpenAI Connection Failed:");
        console.error(error.message);
        if (error.code === 'insufficient_quota') {
            console.error(">> REASON: You have run out of credits or have no payment method added.");
        }
    }
}

testOpenAI();
