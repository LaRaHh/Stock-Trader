<template>
    <v-app>
     <main>
       <v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
              <v-toolbar class="pt-5 blue darken-4">
                <v-toolbar-title class="white--text"><h4>Login</h4></v-toolbar-title>
              </v-toolbar>
              <v-card>
                <v-card-text class="pt-4">
                  <div>
                      <v-form ref="form">
                        <v-text-field
                          label="Insira seu e-mail"
                          v-model="email"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Insira sua senha"
                          v-model="senha"
                          min="8"
                          :append-icon="e1 ? 'visibility' : 'visibility_off'"
                          :append-icon-cb="() => (e1 = !e1)"
                          :type="e1 ? 'password' : 'text'"
                          :rules="passwordRules"
                          counter
                          required
                        ></v-text-field>
                        <v-layout justify-space-between>
                            <v-btn @click="login" :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }">Login</v-btn>
                            <v-divider></v-divider>
                            <p>
                                Você não tem conta?
                                <span>
                             <router-link to="/signup">Crie uma conta</router-link>
                                </span>
                            </p>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
       </main>
       </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: "",
      errorMessage:""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.senha)
        .then(
          (user) => {
            this.$router.replace("/home");
            this.$toast.success("Login feito com sucesso!", {
                position: "top-right",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false
                })
          },
          (err) => {
              if (this.email < 8) {
              this.errorMessage = "Por favor digite seu e-mail";
            } else if (this.senha < 6) {
              this.errorMessage = "Por favor digite sua senha";
            } else{
                this.errorMessage = "Seu e-mail e/ou senha estão incorretos";
            }
                this.$toast.error("Ocorreu um erro: " + this.errorMessage, {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                    }) 
          }
        );
    },

  },
};
</script>

<style>
</style>