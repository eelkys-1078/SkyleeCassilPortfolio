// components/portfolio/Portfolio.js
import ProjectBox from './ProjectBox.js';
import Modal from './Modal.js';
import { designProjects, photoshopIllustratorProjects, devProjects } from './Projects.js';

export default {
    components: { ProjectBox, Modal },
    data() {
        return {
            designProjects,
            photoshopIllustratorProjects,
            devProjects,
            showModal: false,
            modalImage: ''
        };
    },
    methods: {
        openModal(image) {
            this.modalImage = image;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    },
    template: `
        <div class="p-4">
            <h1 class="text-3xl mb-2">My Projects</h1>
            <project-box 
                
                title="UX and UI Design" 
                description="A showcase of my UX and UI design projects. I conducted user interviews, used Figma and Miro, and followed the five-step UX process to create user-centered, visually appealing designs for school and work." 
                :projects="designProjects"
                @open-modal="openModal"
            ></project-box>
            <project-box 
                
                title="Photoshop and Illustrator" 
                description="A collection of my graphic design projects. Using Photoshop and Illustrator, I created marketing materials, event flyers, posters, and website mockups that emphasize visual impact and engagement."    
                :projects="photoshopIllustratorProjects"
                @open-modal="openModal"
            ></project-box>
            <project-box 
                
                title="Development" 
                description="A compilation of my development projects. I built websites and applications using HTML, CSS, JavaScript, React, Vue, Tailwind, and WordPress. These projects showcase my ability to create responsive, user-friendly solutions for school and work. Check out this site for a Vue and Tailwind example."  
                :projects="devProjects"
                @open-modal="openModal"
            ></project-box>
            <modal 
                :image="modalImage"
                :show="showModal"
                @close="closeModal"
            ></modal>
        </div>
    `
}
