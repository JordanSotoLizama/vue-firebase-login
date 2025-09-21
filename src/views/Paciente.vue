<template>
  <div>
    <h2>Panel Paciente (protegido)</h2>
    <p>Bienvenido {{ userEmail }}</p>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { ref, onMounted } from "vue";

const router = useRouter();
const userEmail = ref("");

onMounted(() => {
  userEmail.value = auth.currentUser?.email || "desconocido";
});

async function logout() {
  await signOut(auth);
  router.push("/login");
}
</script>