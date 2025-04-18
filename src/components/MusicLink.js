export default function MusicLink() {
    return (
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-6 rounded-2xl shadow-lg max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-2">🎶 Listen to My Latest Tracks</h2>
            <p className="mb-4">Available on all major platforms.</p>
            <div className="flex gap-4">
                <a href="https://soundcloud.com/yourusername" target="_blank" className="bg-white text-black px-4 py-2 rounded-xl hover:opacity-90 font-semibold">
                    SoundCloud
                </a>
                <a href="https://music.apple.com/yourlink" target="_blank" className="bg-white text-black px-4 py-2 rounded-xl hover:opacity-90 font-semibold">
                    Apple Music
                </a>
            </div>
        </div>
    )
}