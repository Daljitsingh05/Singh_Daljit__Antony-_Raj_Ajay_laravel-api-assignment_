
const saveToStorage = (data) => {
  localStorage.setItem("games", JSON.stringify(data));
};

const getFromStorage = () => {
    return JSON.parse(localStorage.getItem("games")) || [];
};

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
     const stored = getFromStorage();

    if (stored.length > 0) {
         this.items = stored;

    } else {
          this.getItems();
    }
}

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
    saveToStorage(data.data); 
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