import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import VideoPlayer from "./components/player.tsx";
import ListView from "./components/listView.tsx";
import { useState } from "react";

const queryClient = new QueryClient();
function App() {
  const [videoId, setVideoId] = useState<string | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <VideoPlayer videoId={videoId} />
        <ListView onClick={(id) => setVideoId(id)} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
