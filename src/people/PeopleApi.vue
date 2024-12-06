<template>
    <Loading v-if="isLoading" />
    <div v-else class="container text-center mt-4">
        <h2 class="text-light text-bg-secondary font-bold mt-4 mb-4 p-3 rounded-4" style="letter-spacing: 10px;">
            Popular People
        </h2>
        <div class="row">
            <div class="col-md-4 text-center rounded-5 mt-4" v-for="p in people" :key="p.id">
                <div class="text-bg-secondary p-4 rounded-5 d-flex flex-column h-100">
                    <img :src="`https://image.tmdb.org/t/p/w500${p.profile_path}`" class="img-fluid rounded-4"
                        alt="Actor Image" style="height: 400px; object-fit: cover;" />
                    <h5 class="text-warning fw-bold fs-2 mt-3">{{ p.name }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Loading from '../components/Loading.vue';

const apiKey = '9e3311ec1f57418cb454df1bde326ff2';
const peopleURL = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=es`;

const people = ref([]);
const isLoading = ref(true);

const getPopularPeople = async () => {
    try {
        const resp = await axios.get(peopleURL);
        people.value = resp.data.results;
    } catch (error) {
        console.error(error);
    } finally {
        setTimeout(() => {
            isLoading.value = false;
        }, 500)
    }
};

getPopularPeople();
</script>