import Parser from 'rss-parser'; // Import the rss-parser library

export async function GET(request) {
    const SOUNDCLOUD_USERID = process.env.SOUNDCLOUD_USERID; // Optional: your SoundCloud User ID

    const parser = new Parser(); // Create a new parser instance
    const trackFeedUrl = `https://soundcloud.com/${SOUNDCLOUD_USERID}/rss`; // Use the RSS feed URL

    try {
        // Fetch and parse the RSS feed
        const feed = await parser.parseURL(trackFeedUrl);

        if (!feed.items || feed.items.length === 0) {
            console.error('No tracks found in the RSS feed');
            throw new Error('No tracks available');
        }

        // Map the RSS feed items to a list of tracks with title and URL
        const tracks = feed.items.map((item) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate, // You can add more fields if needed
        }));

        // Return the tracks in the response
        return new Response(JSON.stringify({ tracks }), {
            status: 200,
        });
    } catch (error) {
        // Log the error message for debugging
        console.error('Error:', error.message);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}
