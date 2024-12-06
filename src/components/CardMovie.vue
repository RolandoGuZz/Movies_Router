<template>
    <div class="container text-center mt-4">
        <img :src="poster" alt="Movie poster" class="img-fluid rounded-5" style="height: 350px; object-fit: cover;">
        <h2 class="text-black fw-bold mt-3">{{ titulo }}</h2>
        <h3 class="text-light mt-4">{{ año }}</h3>
    </div>
</template>

<script setup>
defineProps({
    poster: String,
    titulo: String,
    año: String
});
</script>