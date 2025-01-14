// components/portfolio/Modal.js
export default {
    props: {
        image: String,
        show: Boolean
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    },
    template: `
        <div v-if="show" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <button @click="closeModal" class="absolute top-4 right-4 text-white text-2xl">&times;</button>
            <img :src="image" class="max-w-full max-h-full">
        </div>
    `
}
