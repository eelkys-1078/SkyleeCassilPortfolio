export default {
    props: {
        title: String,
        description: String,
        projects: Array,
    },
    data() {
        return {
            showProjects: false,
            selectedProjectIndex: null,
        };
    },
    methods: {
        openModal(index) {
            this.selectedProjectIndex = index;
        },
        closeModal() {
            this.selectedProjectIndex = null;
        },
        nextProject() {
            if (this.selectedProjectIndex !== null) {
                this.selectedProjectIndex = (this.selectedProjectIndex + 1) % this.projects.length;
            }
        },
        previousProject() {
            if (this.selectedProjectIndex !== null) {
                this.selectedProjectIndex = (this.selectedProjectIndex - 1 + this.projects.length) % this.projects.length;
            }
        },
    },
    template: `
        <div class="flex flex-col items-center justify-center">
            <div class="w-full bg-white p-1 border border-purple-100 rounded-lg shadow-lg">
                <h1 class="text-2xl mb-8 font-cursive text-black text-center">{{ title }}</h1>
                <h2 class="text-lg mb-6 text-gray-900 text-center">{{ description }}</h2>
                <div class="flex justify-center mb-4">
                    <div @click="showProjects = !showProjects" class="bg-gradient-to-r from-pink-200 to-purple-200 px-1 py-1 rounded-full hover:from-pink-100 hover:to-purple-100 text-sm font-semibold shadow-lg transform transition-all duration-300 hover:scale-110">
                        {{ showProjects ? 'Hide Projects' : 'Show Projects' }}
                    </div>
                </div>
                <div v-show="showProjects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(project, index) in projects" :key="project.id" class="relative bg-white p-6 rounded-lg shadow-lg border border-pink-100 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-pink-50" @click="openModal(index)">
                        <img :src="project.image" alt="Project image" class="mx-auto h-40 w-full object-cover rounded-md mb-4 shadow-lg border-2 border-pink-100">
                        <p class="mb-2 text-pink-700">{{ project.description }}</p>
                        <a v-if="project.url" :href="project.url" target="_blank" class="bg-gradient-to-r from-pink-200 to-purple-200 px-6 py-1 rounded-full hover:from-pink-100 hover:to-purple-100 text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-110">View Project</a>
                    </div>
                </div>
            </div>

            <!-- Carousel Modal -->
            <div v-if="selectedProjectIndex !== null" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white p-8 rounded-lg shadow-lg relative w-11/12 max-w-4xl">
                    <button @click="closeModal" class="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div class="relative flex items-center justify-center">
                        <button @click="previousProject" class="absolute left-0 p-2 text-gray-600 hover:text-gray-900">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <img :src="projects[selectedProjectIndex].image" alt="Project image" class="w-full h-full object-cover rounded-md mb-4">
                        <button @click="nextProject" class="absolute right-0 p-2 text-gray-600 hover:text-gray-900">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                    <h3 class="text-2xl mb-2 text-pink-700">{{ projects[selectedProjectIndex].description }}</h3>
                    <p class="text-lg text-gray-800">{{ projects[selectedProjectIndex].price }}</p>
                    <a v-if="projects[selectedProjectIndex].url" :href="projects[selectedProjectIndex].url" target="_blank" class="bg-gradient-to-r text-center from-pink-200 to-purple-200 px-6 py-1 rounded-full hover:from-pink-100 hover:to-purple-100 text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-110">View Project</a>
                </div>
            </div>
        </div>
    `,
    style: `
        .font-cursive {
            font-family: 'Dancing Script', cursive;
        }
    `,
};
