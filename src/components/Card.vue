<script setup lang="ts">
import {ref, watch} from "vue";
 import {useStore} from "vuex";

 const props = defineProps<{
   id_ques: number;
   title: string,
   options?: string[],
   correct?: number;
 }>()

 const editing = ref<boolean>(false)
 const store = useStore()
 function save(){
   const payload = {
     index: props.id_ques,
     data: {
       title: vtitle.value,
       options: [A.value, B.value, C.value, D.value],
       correct: vcorrect.value
     }
   }

  store.commit("update",payload)

 }

 const deleteQ = () => {
   store.commit("deleteQues", {
     index: props.id_ques
   })
 }

 const vtitle = ref(props.title)
 const vcorrect = ref(props.correct)
  const A = ref(props.options[0])
  const B = ref(props.options[1])
  const C = ref(props.options[2])
  const D = ref(props.options[3])

const op = [A,B,C,D]

watch(op, ([A,B,C,D]) => {
  save()
})

watch(vtitle, () => {
  save()
})

</script>

<template>
  <div class="bg-gray-200 rounded-lg p-5 flex flex-col">
    <div class="flex flex-row justify-end pb-5" >
      <button @click.prevent="deleteQ" class="rounded-lg bg-red-400 px-5 py-2">Delete</button>
    </div>
    <p @click="editing = true" v-if="!editing">{{vtitle}}</p>
    <input v-model="vtitle" v-if="editing" name="question"/>
    <div class="mt-2">
      <div class="flex flex-col gap-2" v-for="(item,index) in options">
        <div class="flex flex-row gap-x-2 mt-2">
          <input @click="() => {
            vcorrect = index
            save()
          }" v-bind:value="index" type="radio" :key="index" v-bind:name="title"/>
          <div @click="editing = true">
            <p v-if="!editing">{{op[index].value}}</p>
            <textarea v-model="op[index].value" autocapitalize="sentences" v-if="editing"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
