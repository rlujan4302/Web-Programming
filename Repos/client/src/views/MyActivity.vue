<template>
  <main class="columns is-multiline is-centered">
    <div class="column is-full is-centered">
      <h1 class="title" >My Activity</h1>
    </div>

    <div class="column is-half-desktop is-centered">
        <button @click="DisplayWorkout.vue" class="button is-info is-fullwidth is-rounded">Add Workout</button>
        <form>
            <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Add a Workout</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <div class="field" data-v-0c75939c="">
                        <label class="label" for="name" data-v-0c75939c="">Title</label>
                        <input type="text" class="input" id="name" data-v-0c75939c="">
                    </div>
                    <div class="field" data-v-0c75939c="">
                        <label class="label" for="date" data-v-0c75939c="">Date</label>
                        <input type="date" class="input" id="date" data-v-0c75939c="">
                    </div>
                    <div class="field" data-v-0c75939c="">
                        <label class="label" for="duration" data-v-0c75939c="">Duration</label>
                        <input type="text" class="input" id="duration" data-v-0c75939c="">
                    </div>
                    <div class="field" data-v-0c75939c="">
                        <label class="label" for="location" data-v-0c75939c="">Location</label>
                        <input type="text" class="input" id="location" data-v-0c75939c="">
                    </div>
                    <div class="field" data-v-0c75939c="">
                        <label class="label" for="location" data-v-0c75939c="">Picture</label>
                        <input type="text" class="input" id="location" data-v-0c75939c="">
                    </div>
                    <div class="field" data-v-0c75939c="">
                        <label class="label" for="type" data-v-0c75939c="">Type</label>
                        <div class="select is-full-width" data-v-0c75939c="">
                                <select class="form-control" id="type" data-v-0c75939c="">
                                <option value="run" data-v-0c75939c="">Run</option>
                                <option value="bike" data-v-0c75939c="">Bike</option>
                                <option value="swim" data-v-0c75939c="">Walk</option>
                                <option value="cardio" data-v-0c75939c="">Cardio</option>
                                <option value="strength" data-v-0c75939c="">Strength</option>
                                </select>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button">Cancel</button>
                </footer>
                </div>
             </div>
         </form>
         <br>
    </div>
  </main>
</template>

<script setup lang="ts">
import DisplayWorkout from './DisplayWorkout.vue';

    
</script>