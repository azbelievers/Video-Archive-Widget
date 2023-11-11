import abcIcon from "../assets/abc-icon.png";
import { Box, Stack } from "@mui/joy";
import ReactPlayer from "react-player";
interface PlayerProps {
  videoUrl: string | null;
}

export default function VideoPlayer({ videoUrl }: PlayerProps) {
  const url = `${import.meta.env.VITE_MEDIA_URL}/${videoUrl}`;

  return (
    <Box maxWidth="100%">
      {videoUrl ? (
        <ReactPlayer width="100%" height="20rem" url={url} controls />
      ) : (
        <Stack height="20rem" justifyContent="center">
          <img width="100%" src={abcIcon} alt="Arizona Believers Church" />
        </Stack>
      )}
    </Box>
  );
}
