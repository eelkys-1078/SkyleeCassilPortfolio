export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      sendEmail() {
        const baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSekPTIAZAGwx5pE2zrEv1d82pUvH4eNKs9l0Ib3_7CKn9yQ2A/formResponse';
        const nameEntry = 'entry.439053968';
        const emailEntry = 'entry.1425593054';
        const messageEntry = 'entry.1550041388';
  
        const name = encodeURIComponent(this.name);
        const email = encodeURIComponent(this.email);
        const message = encodeURIComponent(this.message);
  
        const queryString = `?${nameEntry}=${name}&${emailEntry}=${email}&${messageEntry}=${message}`;
        const fullURL = baseURL + queryString;
  
        fetch(fullURL, { method: 'POST', mode: 'no-cors' })
          .then(response => {
            console.log('Form submitted successfully');
            alert('Form submitted successfully');
          })
          .catch(error => {
            console.error('Error submitting form:', error);
            alert('Failed to submit form');
          });
      }
    },
    template: `
      <div class="p-6 bg-gradient-to-r from-pink-50 to-purple-50 text-pink-900 mb-24">
        <h1 class="text-5xl mb-12 font-cursive text-center text-pink-700">Contact Me</h1>
        <form @submit.prevent="sendEmail" class="space-y-6 max-w-lg mx-auto bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl backdrop-blur-lg  border-pink-300 transform transition-all duration-300 hover:scale-105">
          <div>
            <label for="name" class="block text-lg text-pink-800 mb-2">Name</label>
            <input type="text" v-model="name" id="name" class="w-full p-3 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none">
          </div>
          <div>
            <label for="email" class="block text-lg text-pink-800 mb-2">Email</label>
            <input type="email" v-model="email" id="email" class="w-full p-3 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none">
          </div>
          <div>
            <label for="message" class="block text-lg text-pink-800 mb-2">Message</label>
            <textarea v-model="message" id="message" class="w-full p-3 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"></textarea>
          </div>
          <button type="submit" class="bg-gradient-to-r from-pink-400 to-purple-400 px-6 py-3 rounded-full hover:from-pink-500 hover:to-purple-500 text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-110">Send</button>
        </form>
      </div>
    `,
    style: `
      .font-cursive {
        font-family: 'Dancing Script', cursive;
      }
    `
  }
  