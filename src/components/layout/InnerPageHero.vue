<template>
    <div class="relative z-0 h-40 sm:h-64 ">
        <img class="h-full w-full object-cover" :src="imageUrl" alt="">
        <div class="absolute inset-0  bg-gradient-to-t from-red-500  opacity-50"></div>
        <div class="absolute inset-0 ">
            <div class="container mx-auto px-4 sm:px-0 text-white w-full h-full flex flex-col items-center justify-center text-2xl sm:text-5xl sm:justify-end">
                <div class="sm:mb-8 text-center">
                    {{title}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export  default {
        props:{
            imageUrl:{
                type:String,
                required:true,
            },
            title:{
                type: String,
                required: true,
            }
        }
    }
</script>