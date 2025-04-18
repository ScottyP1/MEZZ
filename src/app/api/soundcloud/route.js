export async function GET(request) {
    const SOUNDCLOUD_ID = process.env.SOUNDCLOUD_ID; // Ensure you add your client_id in .env file
    const SOUNDCLOUD_USERID = process.env.SOUNDCLOUD_USERID; // Add your user ID as well

    try {
        // Fetch tracks from the user using the user ID
        const trackRes = await fetch(
            `https://api.soundcloud.com/users/${SOUNDCLOUD_USERID}/tracks?client_id=${SOUNDCLOUD_ID}`
        );

        if (!trackRes.ok) {
            const trackError = await trackRes.text(); // Log error response for tracks
            console.error('Error fetching tracks:', trackError);
            throw new Error('Failed to fetch tracks');
        }

        const tracks = await trackRes.json();

        // Return tracks in the response
        return new Response(JSON.stringify({ tracks }), {
            status: 200,
        });
    } catch (error) {
        // Log the error message and any extra information for debugging
        console.error('Error:', error.message);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}
