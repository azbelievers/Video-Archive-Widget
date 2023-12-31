import { QueryClient, QueryClientProvider } from "react-query";
import VideoPlayer from "./components/player.tsx";
import ListView from "./components/listView.tsx";
import { useState } from "react";
import { Stack } from "@mui/joy";

const queryClient = new QueryClient();
function App() {
  const [videoId, setVideoId] = useState<string | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack direction="column" alignItems="center" spacing={2} useFlexGap>
        <VideoPlayer videoUrl={videoId} />
        <ListView onClick={(id) => setVideoId(id)} />
      </Stack>
    </QueryClientProvider>
  );
}

export default App;
