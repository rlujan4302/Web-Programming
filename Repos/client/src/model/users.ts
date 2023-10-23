/* B"H
*/
import data from "@/data/users.json";

export interface User {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: "admin" | "user",
    token?: string
}

export function getUsers(): User[] {
    return data.users.map( x => ({ ...x, role: x.id <=5 ? 'admin' : 'user' }) )//anyone with an id of 5 or below is registerd as an admin abover regitered as a user
}

export function getUserByEmail(email: string): User | undefined {
    return getUsers().find( x=> x.email === email );
}