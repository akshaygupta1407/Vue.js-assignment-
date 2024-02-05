<template>
  <nav class="navbar navbar-expand bg-body-tertiary shadow-sm">
    <div class="container">
      <router-link class="nav-link active" to="/">DashBoard</router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/login">LogIn</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="card-header text-center mt-4">
    <h1>Create Account</h1>
  </div>
  <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
    <form action="" class="card" @submit.prevent="submit">
      <div class="card-body">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          required
          v-model="name"
        />
      </div>
      <div class="card-body">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          class="form-control"
          required
          v-model="email"
        />
      </div>
      <div class="card-body">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          v-model="password"
        />
      </div>
      <span v-if="errorMessage" class="alert alert-danger">{{
        errorMessage
      }}</span>
      <div class="text-center">
        <button class="btn btn-primary mb-4">Sign Up</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
const name = ref("");
const email = ref("");
const password = ref("");
const errorMessage = ref();
const flag = ref(false);
const router = useRouter();
const submit = async () => {
  errorMessage.value = undefined;
  flag.value = false;
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/users", {
      name: name.value,
      email: email.value,
      password: password.value,
    });
    console.log(response.data);

    // Handle the response as needed
    try {
      const auth = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email.value,
        password: password.value,
      });
      console.log("LogIn Successfully!");
      flag.value = true;
      console.log(auth.data.token);
      localStorage.setItem("token", auth.data.token);
      localStorage.setItem("user", auth.data.name);
    } catch (error) {
      console.log("The provided credentials are incorrect.");
    }
  } catch (error) {
    // Handle errors
    errorMessage.value = error.response.data.message;
    console.error(error.response.data.message);
  }
  if (flag.value === true) {
    router.push({ path: "/", replace: true });
  }
};
</script>
