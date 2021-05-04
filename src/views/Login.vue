<template>
<div class="container">
    <p class="alert alert-danger mt-5" v-if="errors.length">
    <b>Hata:</b>
    <ul>
      <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
    </ul>
  </p>
  <div class="row mt-5">
    <div class="col-md-6">
      <form method="POST">
        <div class="form-group row mt-5">
          <input
            type="email"
            class="form-control"
            placeholder="Kullanıcı Adı"
            v-model="user.name"
          />
        </div>
        <div class="form-group row">
          <input
            type="password"
            class="form-control"
            placeholder="Şifre"
            v-model="user.password"
          />
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="kullaniciKontrol">Giriş</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import account from "../accountjson.json";
export default {
    created(){
        this.account = account.accounts;
        
    },
    mounted(){
           },
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
      errors:[],
        
      
      account:[],
      budeger:"Jack",
      loading: true,
    };
  },
  methods: {
      kullaniciKontrol(){
        this.errors = [];
        if (!this.user.name) {
        this.errors.push('Lütfen kullanıcı adınızı giriniz');
      }
      if (!this.user.password) {
        this.errors.push('Şifrenizi girin');
      }
      this.account.forEach(element => {
          if (element.username === this.user.name && element.password === this.user.password) {
            localStorage.setItem("name",this.user.name);
            this.$router.push({ name: "anasayfa" });
            
          }
          
      });
      this.errors.push("Hatalı kullanıcı");
             
      },
      
  },
};
</script>

<style></style>
