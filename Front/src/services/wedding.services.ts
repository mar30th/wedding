import http from "../constant/api";

const baseUrl = process.env.REACT_APP_BASE_URL;

export type GetFetchGallery = [{
    img_id: number;
    link: string;
}]

export type GetFetchBanner = [{
    banner_id: number;
    link: string;
}]

export type GetFetchShowcase = [{
    showcase_id: number;
    link: string;
}]

export const weddingServices = {
    FetchBanner: () => http.get<GetFetchBanner>(`${baseUrl + "/gallery"}`),
    FetchGallery: () => http.get<GetFetchGallery>(`${baseUrl + "/gallery/image"}`),
    FetchShowcase: () => http.get<GetFetchShowcase>(`${baseUrl + "/gallery/showcase"}`),
};