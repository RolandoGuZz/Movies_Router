<template>
    <Loading v-if="isLoading" />
    <div v-else class="container text-center mt-4">
        <h2 class="text-light text-bg-secondary font-bold mt-4 mb-4 p-3 rounded-4" style="letter-spacing: 10px;">List of
            the Popular Movies
        </h2>
        <div v-for="m in data" :key="m.id">
            <RouterLink :to="`/actor/${m.id}`" class="btn btn-primary fw-bold mt-4 w-25">{{ m.title }}</RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import Loading from '../components/Loading.vue';

const apiKey = '9e3311ec1f57418cb454df1bde326ff2'
const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

const isLoading = ref(true);
const data = ref([]);

const getMovie = async () => {
    try {
        const resp = await axios.get(baseURL);
        data.value = resp.data.results;
    } catch (error) {
        console.error(error);
    } finally {
        setTimeout(() => {
            isLoading.value = false;
        }, 500)
    }
}

getMovie()
</script>