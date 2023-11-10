import http from "../lib/http.ts";
import { useQuery } from "react-query";
import { useState } from "react";

interface ListViewProps {
  onClick: (item: string) => void;
}
export default function ListView({ onClick }: ListViewProps) {
  const [page, setPage] = useState(0);

  const { data, isError, isLoading } = useQuery(
    "allVods",
    () => http.getVODs(page),
    {
      refetchInterval: 1000,
    },
  );

  return (
    <div>
      <h1>Video Archive</h1>
      {isError && <p>Something went wrong...</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data?.map((video) => (
            <div key={video.vodId} onClick={() => onClick(video.filePath)}>
              <p>{video.vodName}</p>
              <p>{video.creationDate}</p>
            </div>
          ))}
        </>
      )}
      <div>
        <button onClick={() => setPage(page + 1)}>Previous Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
    </div>
  );
}
