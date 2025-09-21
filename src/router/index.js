import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Paciente from "../views/Paciente.vue";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const routes = [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/paciente", component: Paciente, meta:
        { requiresAuth: true }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

let ready = false;
onAuthStateChanged(auth, () => (ready = true));

router.beforeEach((to, from, next) => {
    const proceed = () => {
        const user = auth.currentUser;
        if (to.meta.requiresAuth && !user) return next("/login");
        if (to.path === "/login" && user ) return next("/paciente");
        next();
    };
    if (!ready) {
        const off = onAuthStateChanged(auth, () => {
            off();
            ready = true;
            proceed();
        });
    } else {
        proceed();
    }
});

export default router;