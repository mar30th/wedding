import http from "../constant/api";

export type GetFetchGallery = [{
    img_id: number;
    link: string;
}]

export const weddingServices = {
    FetchGallery: () => http.get<GetFetchGallery>(`http://localhost:8080/gallery`),
};