import axios from "axios";

export type VOD = {
  streamName: string;
  vodName: string;
  streamId: string;
  creationDate: number;
  startTime: number;
  duration: number;
  fileSize: number;
  filePath: string;
  vodId: string;
  type: string;
  previewFilePath: null;
};

export default class http {
  private static client = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  });

  public static async getVODs(
    page: number = 0,
    size: number = 100,
  ): Promise<VOD[]> {
    const pageString = page.toString();
    const sizeString = size.toString();

    const response = await this.client.post<VOD[]>("/media/all", {
      page: pageString,
      size: sizeString,
    });
    return response.data;
  }
}
