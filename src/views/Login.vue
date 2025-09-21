<template>
  <div>
    <h2>Login / Registro</h2>
    <input v-model="email" placeholder="email" />
    <input v-model="password" placeholder="password" type="password" />
    <button @click="login">Login</button>
    <button @click="register">Registrar</button>
    <p v-if="msg" style="color:red">{{ msg }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const router = useRouter();
const email = ref("");
const password = ref("");
const msg = ref("");

async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/paciente");
  } catch (e) {
    msg.value = e.message;
  }
}

async function register() {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push("/paciente");
  } catch (e) {
    msg.value = e.message;
  }
}
</script>