
export default function SpotifyLink() {
    return (
        <iframe
            style={{
                borderRadius: '12px',
                marginTop: 6,
                marginLeft: 12,
                marginRight: 12,
                display: 'block', // Ensures it's a block-level element
                width: '100%', // Make sure it takes full width of its container
            }}
            src="https://open.spotify.com/embed/artist/2IDHmy8yjm8ASIpFv4A1R0?utm_source=generator&theme=0"
            height='352'// Adjust height based on window width
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        />
    );
}
