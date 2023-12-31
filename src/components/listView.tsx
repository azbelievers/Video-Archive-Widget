import http from "../lib/http.ts";
import { useQuery } from "react-query";
import { useState } from "react";
import {
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Stack,
  ListDivider,
  ListSubheader,
  CircularProgress,
} from "@mui/joy";

interface ListViewProps {
  onClick: (item: string) => void;
}
export default function ListView({ onClick }: ListViewProps) {
  const [page, setPage] = useState(0);

  const { data, isError, isLoading } = useQuery("allVods", () =>
    http.getVODs(page),
  );

  function formatTime(duration: number) {
    const date = new Date(0);
    date.setMilliseconds(duration);
    return date.toISOString().substring(11, 19);
  }

  function formatDate(date: number) {
    const dateObj = new Date(date);
    return dateObj.toDateString();
  }

  return (
    <Stack direction="column" alignItems="center">
      {isError && <p>Something went wrong...</p>}

      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {data && data.length > 0 ? (
            <Box width="100%">
              <List>
                {data
                  .sort((a, b) => {
                    return b.creationDate - a.creationDate;
                  })
                  .map((video) => (
                    <>
                      <ListItem
                        key={video.vodId}
                        onClick={() => onClick(video.filePath)}
                      >
                        <ListItemButton>
                          <ListItemContent>
                            <Stack direction="row" spacing={3}>
                              <ListSubheader>{video.streamName}</ListSubheader>
                              <ListSubheader>
                                <strong>
                                  {formatDate(video.creationDate)}
                                </strong>
                              </ListSubheader>
                              <ListSubheader>
                                Length: {formatTime(video.duration)}
                              </ListSubheader>
                            </Stack>
                          </ListItemContent>
                        </ListItemButton>
                      </ListItem>
                      <ListDivider />
                    </>
                  ))}
              </List>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  size="lg"
                  disabled={page === 0}
                  onClick={() => setPage(page - 1)}
                >
                  Previous Page
                </Button>
                <Button
                  size="lg"
                  color="primary"
                  disabled={data.length < 100 ?? false}
                  onClick={() => setPage(page + 1)}
                >
                  Next Page
                </Button>
              </Stack>
            </Box>
          ) : (
            <ListSubheader>No videos found</ListSubheader>
          )}
        </>
      )}
    </Stack>
  );
}
