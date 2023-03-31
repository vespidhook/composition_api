import { ref } from 'vue';

const counter = ref(0);

export const useCounter = () => {
    function increment() {
        counter.value++;
    }

    function decrement() {
        counter.value--;
    }

    return {
        counter,
        increment,
        decrement
    }
}