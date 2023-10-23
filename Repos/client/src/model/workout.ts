import { reactive } from "vue";
import { useRouter } from "vue-router"

export interface workout {
    pic: string;
    firstName: string;
    lastName: string;
    handle: string;
    date: Date;
    title: string;
    location: string;
    distance: number;
    duration: number;
};