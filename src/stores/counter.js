import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  //state
  const count = ref(0)
  //getters
  const doubleCount = computed(() => count.value * 2)
  //actions/methods
  function increment() {
    count.value++
  }

  function $reset() {
    count.value = 0
  }

  return { count, doubleCount, increment, $reset }
})
