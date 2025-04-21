import AlbumList from "@/components/AlbumList";
import SoundCloud from "@/components/SoundCloudLink";
import SpotifyLink from "@/components/SpotifyLink";
import SoundCloudLink from "@/components/SoundCloudLink";

export default function MusicPage() {
    return (
        <div className="px-4 sm:px-8 mx-auto max-w-full">
            {/* Spotify section */}
            <div className="mt-42 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl tracking-[10px] mb-4 text-red-500">SPOTIFY</h1>
                <SpotifyLink />
                <AlbumList music_site="spotify" />
            </div>

            {/* Soundcloud section */}
            <div className="mt-42 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl tracking-[10px] mb-4 text-red-500">SOUNDCLOUD</h1>
                {/* <AlbumList music_site="soundcloud" /> */}
                <SoundCloudLink />
                {/* <AlbumList music_site="soundcloud" /> */}

                <h1 className="text-center text-red- 500 text-4xl tracking-[10px]">Coming Soon</h1>
            </div>
            {/* Apple section */}
            <div className="mt-42 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl tracking-[10px] mb-4 text-red-500">APPLE MUSIC</h1>
                {/* <AlbumList music_site="apple" /> */}
                <AlbumList music_site='apple' />
            </div>
        </div>
    );
}
