import abcIcon from "../assets/abc-icon.png";
interface PlayerProps {
  videoId: string | null;
}

export default function VideoPlayer({ videoId }: PlayerProps) {
  const url = `${
    import.meta.env.VITE_SERVER_URL
  }/LiveApp/play.html?id=${videoId}&playOrder=vod&autoplay=false`;

  return (
    <div>
      {videoId ? (
        <iframe
          width="560"
          height="315"
          src={url}
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <div>
          <img src={abcIcon} />
        </div>
      )}
    </div>
  );
}
