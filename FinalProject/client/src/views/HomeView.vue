<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { getSession } from '../model/session'
import { getWorkoutsByUserId, type Workout} from "@/model/workouts";

const session = getSession()
const test = ref('test')

// checks if the workout is today
const workoutByTodayFilterFunc = (workout: Workout) => {
  const today = new Date(); 
  const todayMinusOne = new Date(today.setDate(today.getDate() - 1));
  
  const workoutDateDaysAgo = workout.dateDaysAgo;
  const workoutDate = new Date(today.setDate(today.getDate() - workoutDateDaysAgo));
  
  const from = todayMinusOne.getTime(); 
  const to = today.getTime();
  const workoutTime = workoutDate.getTime();
  if(workoutTime >= from && workoutTime <= to) {
    return true;
  }
  return false;
}

// checks if the workout is within the past week
const workoutByWeekFilterFunc = (workout: Workout) => {
  const today = new Date(); // 1501653935994
  const sevenDaysAgo = new Date(today.setDate(today.getDate() - 7));

  const workoutDateDaysAgo = workout.dateDaysAgo;
  const workoutDate = new Date(today.setDate(today.getDate() - workoutDateDaysAgo));
  
  const from = sevenDaysAgo.getTime(); 
  const to = today.getTime();
  const workoutTime = workoutDate.getTime();
  if(workoutTime >= from && workoutTime <= to) {
    return true;
  }
  return false;
}
</script>

<template>
  <div class="about columns is-multiline">
    <div class="column is-hidden-touch is-one-quarter">
      <div class="box is-small-hidden" />
    </div>
    <div class="column">
    </div>
    <div class="column is-one-quarter">
      <div class="box is-small-hidden" />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}</style>