import jwt from 'jsonwebtoken';

export function generateAppleMusicToken() {
    const teamId = process.env.APPLE_MUSIC_TEAM_ID;
    const keyId = process.env.APPLE_MUSIC_KEY_ID;
    let privateKey = process.env.APPLE_MUSIC_PRIVATE_KEY;

    // Validate environment variables
    if (!teamId || !keyId || !privateKey) {
        throw new Error('Missing Apple Music API credentials in environment variables');
    }

    // Replace escaped newlines in private key, if necessary
    // privateKey = privateKey.replace(/\\n/g, '\n');

    try {
        const token = jwt.sign(
            {
                iss: teamId,
                iat: Math.floor(Date.now() / 1000), // Issued at: current time in seconds
                exp: Math.floor(Date.now() / 1000) + 15777000, // Expires in 6 months
            },
            privateKey,
            {
                algorithm: 'ES256',
                header: {
                    alg: 'ES256',
                    kid: keyId,
                },
            }
        );
        return token;
    } catch (error) {
        throw new Error(`Failed to generate Apple Music token: ${error.message}`);
    }
}