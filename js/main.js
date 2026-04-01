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

    methods: {
        getItems() {
      this.loading = true;
     this.error = null;

 fetch("https://jsonplaceholder.typicode.com/posts")
   .then(response => response.json())
      .then(data => {
             this.items = data.data ? data.data : data;
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

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   .then(response => response.json())
        .then(data => {
        this.selectedItem = data;
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