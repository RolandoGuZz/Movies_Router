<template>
    <Loading v-if="isLoading" />
    <div v-else class="container text-center mt-4">
        <h2 class="text-light text-bg-secondary font-bold mt-4 mb-4 p-3 rounded-4" style="letter-spacing: 10px;">Actors
            of the Movie</h2>
        <RouterLink to="/actor" class="btn btn-primary fw-bold w-25">Back</RouterLink>
        <div class="row">
            <div class="col-md-4 text-center rounded-5 mt-4" v-for="a in actors" :key="a.id">
                <div class="text-bg-secondary p-4 rounded-5 d-flex flex-column h-100">
                    <img :src="`https://image.tmdb.org/t/p/w500${a.profile_path}`" class="img-fluid rounded-4"
                        alt="Actor Image" style="height: 400px; object-fit: cover;" />
                    <h5 class="text-warning fw-bold fs-2 mt-3">{{ a.name }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import axios from 'axios';
import Loading from '../../components/Loading.vue';

const apiKey = '9e3311ec1f57418cb454df1bde326ff2';
const route = useRoute();
const movieId = route.params.id;
const actorURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

const actors = ref([]);
const isLoading = ref(true);

const getActors = async () => {
    try {
        const resp = await axios.get(actorURL);
        actors.value = resp.data.cast.slice(0, 6);
    } catch (error) {
        console.error(error);
    } finally {
        setTimeout(() => {
            isLoading.value = false;
        }, 500)
    }
};

getActors();
</script>