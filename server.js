const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize the OpenAI API client
const openai = new OpenAI({
    apiKey: "I'm not showing you my OpenAI API key", // Replace with your OpenAI API key
});

// Endpoint to generate a prompt
app.post('/generate-prompt', async (req, res) => {
    const { prompt, maxTokens } = req.body;
    try {
        const response = await openai.completions.create({
            model: "gpt-3.5-turbo",
            prompt: prompt,
            max_tokens: maxTokens || 150,
        });
        res.json({ text: response.choices[0].text.trim() });
    } catch (error) {
        console.error("Error generating prompt:", error);
        res.status(500).json({ error: "Failed to generate prompt" });
    }
});

// Start the server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
