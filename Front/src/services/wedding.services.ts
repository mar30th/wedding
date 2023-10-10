import http from "../constant/api";

export type GetFetchGallery = [{
    img_id: number;
    link: string;
}]

export type GetFetchBanner = [{
    banner_id: number;
    link: string;
}]

export const weddingServices = {
    FetchBanner: () => http.get<GetFetchBanner>(`http://localhost:8080/gallery`),
    FetchGallery: () => http.get<GetFetchGallery>(`http://localhost:8080/gallery`),
};