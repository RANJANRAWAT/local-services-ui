import fetch from 'node-fetch';

const instances = [
    "https://inv.tux.pizza",
    "https://invidious.jing.rocks",
    "https://vid.puffyan.us",
    "https://invidious.nerdvpn.de",
    "https://inv.nadeko.net",
    "https://invidious.privacydev.net"
];

async function testInstances() {
    console.log("Testing Invidious Instances...");
    const query = "React JS";

    for (const instance of instances) {
        try {
            console.log(`Testing ${instance}...`);
            const start = Date.now();
            const response = await fetch(`${instance}/api/v1/search?q=${encodeURIComponent(query)}&type=video`, {
                timeout: 5000 // 5s timeout
            });
            const duration = Date.now() - start;

            if (response.ok) {
                const data = await response.json();
                console.log(`✅ [${duration}ms] ${instance} is UP. Found ${data.length} results.`);
            } else {
                console.log(`❌ [${response.status}] ${instance} returned error.`);
            }
        } catch (error) {
            console.log(`❌ ${instance} failed: ${error.message}`);
        }
    }
}

testInstances();
