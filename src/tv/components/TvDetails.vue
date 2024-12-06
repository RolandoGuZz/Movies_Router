<template>
    <Loading v-if="isLoading" />
    <div v-else class="container text-center mt-4">
        <h2 class="text-light text-bg-secondary font-bold mt-4 mb-4 p-3 rounded-4" style="letter-spacing: 10px;">Details
        </h2>
        <div class="row align-items-center text-bg-secondary mt-4 p-4 rounded-5">
            <div class="col-3">
                <img :src="`https://image.tmdb.org/t/p/original${tvShow.poster_path}`" class="img-fluid rounded-5"
                    alt="Poster Tv" />
            </div>
            <div class="col text-center">
                <h3 class="text-warning fw-bold fs-2">{{ tvShow.name }}</h3>
                <p class="text-dark fw-bold fs-4">{{ tvShow.first_air_date }}</p>
                <p class="text-start text-dark fw-bold fs-6">{{ tvShow.overview }}</p>
                <RouterLink to="/tv" class="btn btn-primary fw-bold mt-4">Back</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const apiKey = '9e3311ec1f57418cb454df1bde326ff2';
const route = useRoute();
const tvShow = ref({});
const tvDetailsURL = `https://api.themoviedb.org/3/tv/${route.params.id}?api_key=${apiKey}&language=es`;
import Loading from '../../components/Loading.vue';

const isLoading = ref(true);

const getTvDetails = async () => {
    try {
        const resp = await axios.get(tvDetailsURL);
        tvShow.value = resp.data;
    } catch (error) {
        console.error(error);
    } finally {
        setTimeout(() => {
            isLoading.value = false;
        }, 500)
    }
};

getTvDetails();
</script>