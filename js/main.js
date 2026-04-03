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
          gsap.from(".game-item", {
          opacity: 0,
             y: 20,
          duration: 0.5,
          stagger: 0.2
        });
      }, 300);
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