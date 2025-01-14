export default {
    template: `
      <div class="w-full">
        <div class="flex bg-white" style="height:600px;">
          <div class="flex items-center text-center lg:text-left px-12 md:px-20 lg:w-1/2">
            <div>
              <h1 class="text-4xl text-center md:text-5xl mb-8 font-cursive text-gray-800">Welcome to my Portfolio!</h1>
              <p class="mt-8 text-base md:text-lg text-center leading-relaxed text-gray-700">
                I am a passionate web developer with expertise in HTML, CSS, React, JavaScript, Vue, Tailwind, SASS, and WordPress. 
                I specialize in creating visually appealing and highly functional websites. 
                I am committed to delivering exceptional user experiences and continuously enhancing my skills. 
              </p>
              <div class="flex justify-center lg:justify-start mt-12">
                <a href="#portfolio" class="bg-gradient-to-r from-pink-400 to-purple-400 px-6 py-3 rounded-full hover:from-pink-500 hover:to-purple-500 text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-110">Portfolio</a>
              </div>
            </div>
          </div>
          <div class="hidden lg:block lg:w-1/2 relative">
            <div class="h-full object-cover bg-cover bg-center" style="background-image: url('images/website-builds.jpg'); clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%);">
              <div class="h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </div>
    `,
    style: `
      .font-cursive {
        font-family: 'Dancing Script', cursive;
      }
    `
  }
  