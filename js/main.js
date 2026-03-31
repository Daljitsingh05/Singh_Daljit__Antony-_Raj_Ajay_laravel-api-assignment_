const app = Vue.createApp({
    data() {
        return {
            items:[],
            selectedItem:null,
            loading: false,
            error:null
        }
    };
created() {
        this.getItems();
    },
 methods: {
   getItems() {
    this.loading = true;
     this.error = null;

      fetch("https)
      .then(response => response.json())
       .then(data => {
         this.items = data;
        this.loading = false;
       })
. catch(erorr=>{
    this.erorr = "Failed to load data";
    this .loading =false;
});
},
 getdetails(id){
    this.loading=true
    this.erorr = null;
    
 }



app.mount("#app");