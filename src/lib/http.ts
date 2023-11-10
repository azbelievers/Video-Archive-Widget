import axios from "axios";

export type VOD = {
    streamName:      string;
    vodName:         string;
    streamId:        string;
    creationDate:    number;
    startTime:       number;
    duration:        number;
    fileSize:        number;
    filePath:        string;
    vodId:           string;
    type:            string;
    previewFilePath: null;
}

export default class http {
    private static client = axios.create({
        baseURL: `${import.meta.env.VITE_SERVER_URL}/LiveApp/rest/v2`,
        headers: {
            "Content-Type": "application/json",
        },
    });

    public static async getVODs(page: number = 0, size: number = 100): Promise<VOD[]> {
        const response = await this.client.get<VOD[]>(`/vods/list/${page}/${size}`);
        return response.data;
    }

    public static async getVOD(vodId: string): Promise<VOD> {
        const response = await this.client.get<VOD>(`/vods/${vodId}`);
        return response.data;
    }
}