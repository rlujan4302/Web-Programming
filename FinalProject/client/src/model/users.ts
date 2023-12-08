import {api} from "./session";
import data from "../data/users.json";
import type { DataEnvelope, DataListEnvelope } from "./myFetch";

export interface User {
    _id: number,
    firstName: string,
    lastName: string,
    email: string,
    password?: string,
    role: "admin" | "user",
    token?: string,
    image: string
}

export function getUsers(): Promise<DataListEnvelope<User>> {
    return api('users');
}

export async function getUserByEmail(email: string): Promise<User | undefined>{
    const users = await getUsers();
    const user = users.data.find((x: User) => x.email === email);
    return user;
}