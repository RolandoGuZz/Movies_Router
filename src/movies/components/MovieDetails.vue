<template>
    <Loading v-if="isLoading" />
    <div v-else class="container text-center mt-4">
        <h2 class="text-light text-bg-secondary font-bold mt-4 mb-4 p-3 rounded-4" style="letter-spacing: 10px;">Details
        </h2>
        <div class="row align-items-center text-bg-secondary mt-4 p-4 rounded-5">
            <div class="col-3">
                <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" class="img-fluid rounded-5"
                    alt="Poster Movie" />
            </div>
            <div class="col text-center">
                <h3 class="text-warning fw-bold fs-2">{{ movie.title }}</h3>
                <p class="text-dark fw-bold fs-4">{{ movie.release_date }}</p>
                <p class="text-start text-dark fw-bold fs-6">{{ movie.overview }}</p>
                <RouterLink to="/movie" class="btn btn-primary fw-bold mt-4">Back</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Loading from '../../components/Loading.vue';

const apiKey = '9e3311ec1f57418cb454df1bde326ff2';
const route = useRoute();
const movie = ref({});
const isLoading = ref(true);

const movieDetailsURL = `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${apiKey}`;

const getMovieDetails = async () => {
    try {
        const resp = await axios.get(movieDetailsURL);
        movie.value = resp.data;
    } catch (error) {
        console.error(error);
    } finally {
        setTimeout(() => {
            isLoading.value = false;
        }, 500);
    }
};

getMovieDetails();
</script>
