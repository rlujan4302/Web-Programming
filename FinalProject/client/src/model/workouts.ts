import {api} from "./session";
import data from "../data/workouts.json";
import {reactive} from "vue";


const photos : string[] = [
    "BikeWorkout.png",
    "GenericWorkout.png",
    "RunningWorkout.png",
    "swimWorkout.png"
];

for (var i = 0; i < photos.length; i++) { //Idea came from classmate
    photos[i] = new URL(`../assets/photos/${photos[i]}`, import.meta.url).href;
}

export interface Workout {
    id: number,
    dateDaysAgo: number,
    type: string,
    distance: number,
    duration: number,
    location: string,
    photo: string
}

export const Workouts = reactive(workoutData());

export function workoutData(): Workout[] {
    const workouts: Workout[] = [];
    for (const x of data.workouts) {
      let photo = photos[Math.floor(Math.random() * photos.length)];
      workouts.push({ ...x, photo });
    }
    return workouts;
}
  
export function getWorkouts(): Promise<Workout[]> {
    return api('/workouts');
}
  
export async function createWorkout(workout: Workout, userId: number) {
    try {
        await api('/workouts', {
        workout,
        userId
      }, 'POST');
    } catch (error) {
      console.error('Error in adding workout:', error);
    }
}
  
export function removeWorkout(id: number) {
    const index = Workouts.findIndex(workout => workout.id === id);
    console.log("deleting activtity", index, "with id", id, "from", Workouts)
    Workouts.splice(index, 1);
}
  
export async function getWorkoutsByUserId(userId: number): Promise<Workout[]> {
    return api('/workouts/user/' + userId);
}