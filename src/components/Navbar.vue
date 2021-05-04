<template>
  
    <nav class="navbar navbar-dark bg-dark justify-content-between">
      <a class="navbar-brand">Yapılacaklar listesi</a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Bir task arayın"
          aria-label="Search"
          v-model="searchItem"
        />
        <a class="btn btn-outline-success my-2 my-sm-0"  @click.prevent="ara(searchItem)">
          Ara  
        </a>
        <a class="btn btn-outline-info my-2 my-sm-0 ml-2"  @click.prevent="aramayibirak()">
          Tam listeye dön
        </a>
      </form>
      <a class="btn btn-outline-danger my-2 my-sm-0"  @click="cik()">
          Çıkış yap
        </a>
    </nav>
  
</template>

<script>
export default {
    name:"navbar",
    data(){
        return{
            searchItem:''
        }
    },
    methods:{
        cik(){
            localStorage.removeItem("name");
            return this.$router.push({name:"login"});
        },
        ara(searchItem){
            this.$store.dispatch("searchTodo",searchItem);
        },
        aramayibirak(){
            this.searchItem = '';
            this.$store.dispatch("searchTodo",this.searchItem);
        }
    }

};
</script>

<style></style>
