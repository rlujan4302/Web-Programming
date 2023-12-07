import {api} from "./session";
import data from "../data/users.json";

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

export function getUsers(): Promise<User[]>{
    return api("users");
}

export async function getUserByEmail(email: string): Promise<User | undefined>{
    const users = await getUsers();
    return users.find((x: User) => x.email === email);
}