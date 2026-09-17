export default async function handler(req, res) {

    try {

        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": process.env.GEMINI_API_KEY
                },

                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: "Say hello in one short sentence."
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        return res.status(response.status).json(data);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });
    }
}
