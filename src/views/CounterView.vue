<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore()

</script>

<template>
    <h1>Count : {{ counterStore.count }}</h1>
    <h1>Double Count : {{ counterStore.doubleCount }}</h1>
    <button @click="counterStore.increment()">Increment</button>
    <button @click="counterStore.$reset()">RESET</button>
</template>