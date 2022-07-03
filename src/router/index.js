import { createRouter , createWebHistory} from "vue-router";

const router = createRouter({
    history : createWebHistory(),

    routes: [
        {
            path:"/",
            name:"Home",
            component:()=>import("../views/Home/index.vue"),
        },
        {
            path:"/about",
            name:"About",
            component:()=>import("../views/About/index.vue"),
        },
        {
            path:"/artical",
            name:"Artical",
            component:()=>import("../views/Artical/index.vue"),
        },
        {
            path:"/contract",
            name:"Contract",
            component:()=>import("../views/Contract/index.vue"),
        },
        {
            path:"/basic",
            name:"basic",
            component:()=>import("../views/basic.vue"),
        },
    ]
});

export default router;