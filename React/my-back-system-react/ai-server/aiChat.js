export default async (client, prompt) => {
    const response = await client.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: prompt,
            },
        ],
        n: 1,
    });
    return response.choices[0].message.content;
};
