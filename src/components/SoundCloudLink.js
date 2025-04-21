export default function SoundCloud() {
    return (
        <iframe
            style={{
                borderRadius: '12px',
                marginTop: 6,
                marginLeft: 12,
                marginRight: 12,
                height: 300,
                display: 'block', // Ensures it's a block-level element
                width: '100%', // Make sure it takes full width of its container
            }}
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2006454407&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
    )
}