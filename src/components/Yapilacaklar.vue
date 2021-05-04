<template>
  <div>
    <!-- <div v-if="this.$store.state.todos.length">
      {{ this.$store.state.todos }}
    </div> -->
    <div class="container card card-body text-center mt-5">
      <form class="" @submit.prevent="ekle">
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Yapılacak bir şey yazın..."
              v-model="item.name"
            />
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary btn-block mb-2">
              Kaydet
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="container">
      <table class="table mt-5">
        <thead class="thead-dark mt-5">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Durum</th>
            <th scope="col">Düzenle</th>
            <th scope="col">Sil</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in todos" :key="index">
            <th scope="row">{{ todo.id }}</th>
            <td>
              <span v-show="!item.duzenle">{{ todo.name }}</span
              ><input
                class="form-control"
                type="text"
                v-model="todo.name"
                v-show="item.duzenle"
              />
            </td>
            <td>
              <span v-show="!item.duzenle">{{ todo.durum }}</span
              ><select
                class="form-select"
                aria-label="Default select example"
                v-show="item.duzenle"
                v-model="todo.durum"
              >
                <option value="true">Yapıldı</option>
                <option value="false">Yapılmadı</option>
              </select>
            </td>
            <td><a class="btn btn-info" @click="duzenle()" v-if="!item.duzenle">Düzenle</a></td>
            <td><a class="btn btn-danger" @click="sil(todo.id)">Sil</a></td>
            <td>
              <a
                class="btn btn-info"
                @click="guncelle(todo)"
                v-if="item.duzenle"
                >Güncelle</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.yazdir();
  },
  computed: {
    todos() {
      if (this.$store.state.searchTodoItems.length) {
        return this.$store.getters.getSearchTodos;
      } else {
        return this.$store.getters.getTodos;
      }
    },
  },
  data() {
    return {
      item: {
        id: 0,
        name: "",
        durum: false,
      },
    };
  },
  methods: {
    ekle() {
      this.item.id++;
      return this.$store.dispatch("addTodo", this.item);
    },
    yazdir() {
      console.log(this.item);
    },
    sil(id) {
      this.$store.dispatch("deleteTodo", id);
    },
    duzenle() {
      var duzenle = true;
      this.item = { ...this.item, duzenle };
    },
    guncelle(todo) {
      this.item.duzenle = false;
      this.$store.dispatch("updateTodo", todo);
    },
  },
};
</script>

<style>
.ustunuciz {
  background: green;
}
</style>
