/* B"H
*/

const API_ROOT = import.meta.env.VITE_API_ROOT as string;

export function rest(url: string, body?: unknown, method?: string){
    return fetch(url, {
        method: method ?? (body ? "POST" : "GET"),
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined
    })
        .then(response => response.json())
}

export function api(action: string, body?: unknown, method?: string){
    return rest(`${API_ROOT}/${action}`, body, method);
}



/*  Asynchronous patterns in JavaScript
    1. Callbacks
    2. Pipelining
    3. Promises
    4. Async/Await
*/