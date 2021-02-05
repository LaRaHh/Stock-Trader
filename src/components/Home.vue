<template>
   <div>
      <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
      <v-sheet :elevation="6" class="pa-2" color="primary">  
         <v-icon class="white--text mr-3">info</v-icon>
         <span class=" headline white--text font-weight-light">Você pode Salvar & Carregar os Dados</span>
      </v-sheet>
      <v-sheet :elevation="6" class="pa-2 mt-3" color="success darken-1">  
         <v-icon class="white--text mr-3">info</v-icon>
         <span class=" headline white--text font-weight-light">Clique em 'Finalizar dia' para iniciar um novo dia!</span>
      </v-sheet>
      <v-divider class="my-4"></v-divider>
      <p class="display-1"><strong>Seu Saldo:</strong>{{ funds | currency }}</p>
      <v-divider class="my-4"></v-divider>
      <v-btn flat @click="sair">Sair</v-btn>
   </div>
</template>

<script>
import firebase from 'firebase'
export default {

   computed: {
      funds(){
         return this.$store.getters.funds
      }
   },
   methods: {
      sair() {
         firebase.auth().signOut().then(() => {
            this.$router.replace('login')
         })
      }
   }

}
</script>

<style>

</style>