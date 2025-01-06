const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateFunnyFact = async (article) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Create a funny, witty observation (max 150 characters) about this sports headline: "${article.title}". Make it humorous and sports-related.`,
        },
      ],
      max_tokens: 60,
      temperature: 0.8,
    });

    const funnyFact = response.choices[0].message.content.trim();

    if (!funnyFact) {
      throw new Error("No funny fact generated");
    }

    return funnyFact;
  } catch (error) {
    console.error("OpenAI API Error:", error);

    // Return a random backup joke instead of the same message
    const backupJokes = [
      "Our AI comedian is doing push-ups, back in a minute! 🏋️‍♂️",
      "The joke machine is taking a quick water break! 🥤",
      "Our humor algorithm is stuck in traffic! 🚗",
    ];

    return backupJokes[Math.floor(Math.random() * backupJokes.length)];
  }
};

module.exports = {
  generateFunnyFact,
};
