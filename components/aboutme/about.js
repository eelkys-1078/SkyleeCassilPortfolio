export default {
  template: `
    <div class="w-full flex justify-center">
      <div class="w-4/5  flex flex-col lg:flex-row relative">
        <div class="lg:w-1/2 bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100 p-4 flex items-center justify-center relative z-1">
          <div class="relative w-full h-full flex items-center justify-center">
            <img src="images/Skylee.jpeg" alt="Your Photo" class="w-full h-full object-cover shadow-xl border-2 border-white">
            <div class="absolute bottom-2 right-2 bg-white bg-opacity-75 px-2 py-1 rounded-full shadow-md">
              <h3 class="text-md font-bold text-gray-800">Skylee Schleich</h3>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 bg-white p-4 flex items-center justify-center relative z-1">
          <div class="max-w-md">
            <h1 class="text-4xl mb-4 font-cursive text-red-700 text-center">About Me</h1>
            <h2 class="text-2xl mb-4 text-gray-800">Hello, I'm Skylee Schleich</h2>
            <p class="mt-2 text-md leading-relaxed text-gray-700">
              I am a passionate web developer with expertise in HTML, CSS, React, JavaScript, Vue, Tailwind, SASS, and WordPress. 
              I specialize in creating visually appealing and highly functional websites. 
              I am committed to delivering exceptional user experiences and continuously enhancing my skills. 
              Outside of my professional pursuits, I enjoy fishing and shooting, which help me stay focused and disciplined.
            </p>
            <p class="mt-2 text-md leading-relaxed text-gray-700">
              My journey into web development started with a fascination for technology and design. Over the years, I've honed my skills through various projects and collaborations. I believe in the power of well-crafted websites to make a significant impact on businesses and individuals.
            </p>
            <p class="mt-2 text-md leading-relaxed text-gray-700">
              When I'm not coding, I love spending time outdoors, exploring nature, and finding new adventures. My hobbies help me stay balanced and bring fresh perspectives to my work.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  style: `
    .font-cursive {
      font-family: 'Dancing Script', cursive;
    }
    .about-image {
      z-index: 0; /* Ensure image stays behind other content */
    }
  `
}
