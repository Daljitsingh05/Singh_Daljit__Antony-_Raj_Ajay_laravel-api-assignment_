const app = Vue.createApp({
    data() {
     return {
         items: [],
         selectedItem: null,
            loading: false,
        error: null
        }
    },

    created() {
        this.getItems();
    },
       mounted() {
      setTimeout(() => {
          gsap.from(".game-card", {
          opacity: 0,
             y: 20,
          duration: 0.5,
          stagger: 0.2
        });
      }, 300);
    },
    watch: {
    items() {
      this.$nextTick(() => {
        gsap.from(".game-card", {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.2
        });
      });
    }
  },

    methods: {
        getItems() {
      this.loading = true;
     this.error = null;

fetch("http://localhost:8000/api/video-games")
   .then(response => {
       if (!response.ok) {
           throw new Error("Network error");
       }
       return response.json();
   })
      .then(data => {
        this.items = data.data;
            this.loading = false;
                })

    .catch(error => {
      this.error = "Failed to load data";
         this.loading = false;
 });
 },
getDetails(id) {
  this.loading = true;
     this.error = null;

fetch(`http://localhost:8000/api/video-games/${id}`)
   .then(response => {
       if (!response.ok) {
           throw new Error("Network error");
       }
       return response.json();
   })
        .then(data => {
       this.selectedItem = data.data;
                    this.loading = false;
})
.catch(error => {
     this.error = "Failed to load details";
this.loading = false;
 });
  }
    }
});

app.mount("#app");
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");

  burger.addEventListener("click", () => {
        menu.classList.toggle("active");
  });
});

