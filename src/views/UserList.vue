<template>
  <nav class="navbar navbar-expand bg-body-tertiary shadow-sm">
    <div class="container">
      <router-link class="nav-link active" to="/">DashBoard</router-link>
      <ul class="navbar-nav">
        <li v-if="!token" class="nav-item">
          <router-link class="nav-link" to="/signup">Sign Up</router-link>
        </li>
        <li v-if="!token" class="nav-item">
          <router-link class="nav-link" to="/login">LogIn</router-link>
        </li>
        <li v-if="token" class="nav-item">
          <div class="nav-link">Welcome {{ name }}!</div>
        </li>
        <li v-if="token" class="nav-item">
          <button class="nav-link" @click="logout">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
  <div class="mt-4 mx-auto" style="width: 700px">
    <h1 class="text-secondary text-center">Users List</h1>
    <ul
      v-if="token && userData.content.length"
      class="list-group list-group-flush list-group-numbered"
    >
      <li
        class="list-group-item list-group-item-action text-center"
        v-for="user in userData.content"
      >
        {{ user.name }}
      </li>
    </ul>
    <div
      class="text-secondary text-center"
      v-else-if="token && !userData.content.length"
    >
      No Users
    </div>
    <div v-else class="text-secondary text-center">
      Login to see User's List
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
const token = ref(localStorage.getItem("token"));
const name = ref(localStorage.getItem("user"));
const userData = reactive({
  content: [],
});

onMounted(async () => {
  const content = await axios.get("http://127.0.0.1:8000/api/users");
  userData.content = content.data;
});

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  token.value = null;
  name.value = null;
};
</script>
