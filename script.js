const { createApp }= Vue;

createApp({

  data(){
    return{
      urlApi:'https://flynn.boolean.careers/exercises/api/random/mail',
      emails:[]

    }
    
  },
  mounted() {
   this.getApi()
  },

  methods: {

    getApi(){
      for (let i = 0; i < 10; i++) {
        axios.get(this.urlApi)

         .then((response) => {
            this.emails.push(response.data.response)
            console.log(this.emails)
         })

         .catch((error) => {
          console.log(error)
        })
        
      }
    }
    
  },



}).mount('#app')
