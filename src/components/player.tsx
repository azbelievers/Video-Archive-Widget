import abcIcon from "../assets/abc-icon.png";
import { Box, Container } from "@mui/joy";
interface PlayerProps {
  videoId: string | null;
}

export default function VideoPlayer({ videoId }: PlayerProps) {
  const url = `${
    import.meta.env.VITE_SERVER_URL
  }/LiveApp/play.html?id=${videoId}&playOrder=vod&autoplay=false`;

  return (
    <Container>
      {videoId ? (
        <iframe src={url} allowFullScreen />
      ) : (
        <Box>
          <img src={abcIcon} alt="Arizona Believers Church" />
        </Box>
      )}
    </Container>
  );
}
