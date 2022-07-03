import { ref } from "vue";

export function menuTogle(){
    let isVasiable = ref(false);

    function show(){
        isVasiable.value = true;
    }

    function hide(){
        isVasiable.value = false;
    }

    function isTogle(){
        isVasiable.value === true ? hide() : show();
    }

    return{
        isVasiable,
        show,
        hide,
        isTogle,
    }
}