import axiosClient from "./axios_instance";

export function getRequest(URL: string) {
    return axiosClient.get(`/${URL}`).then(response => response);
}

export function postRequest(URL: string, payload: any) {
    return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL: string, payload: any) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL: string) {
    return axiosClient.delete(`/${URL}`).then(response => response);
}