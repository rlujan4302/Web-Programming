const API_ROOT = import.meta.env.VITE_API_URL;

export function rest(url: string, data?: any, method?: string, headers?: any){
    return fetch(url, {
        method: method ?? (data ? 'POST' : 'GET'),
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: data ? JSON.stringify(data) : undefined,
    })
        .then(res => res.ok 
            ? res.json() 
            : res.json().then(x=> { throw({ ...x, message: x.error }) } )
        );
}

export function api(action: string, body?: unknown, method?: string, headers?: HeadersInit){
    return rest(`${API_ROOT}/${action}`, body, method, headers);
}

export type DataEnvelope<T> = {
    data: T,
    isSuccess: boolean,
    error?: string,
}

export type DataListEnvelope<T> = DataEnvelope<T[]> & {
    total: number,
}