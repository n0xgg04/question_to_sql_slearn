<script setup lang="ts">
import {useStore} from "vuex";
import {ref, watch} from "vue";

  const store = useStore()
  import Card from "../components/Card.vue"
  const questions = store.state.questions
  const quesList = ref(null)
  function newQuestion(){
    store.commit("newQuestion")
  }

  watch(store.state.questions, () => {
    console.log("Changed")
  })
</script>

<template>
  <div class="w-full grid grid-cols-2 gap-x-2.5 h-screen rounded-lg p-5">
    <div class="bg-gray-50 px-5 h-full py-5 overflow-y-scroll">
      <p class="font-bold">Questions</p>
      <div ref="quesList" v-for="(q, i) in questions">
        <card :id_ques="i" class="mt-2" :key="i" :title="q.title" :options="q.options" :correct="q.correct"/>
      </div>
      <button @click="newQuestion" class="bg-blue-400 px-5 py-2 rounded-lg text-sm mt-5">New</button>
    </div>
    <div class="bg-red-50 h-full rounded-lg px-5 py-5 font-bold">
      <p class="font-bold">SQL</p>
    </div>
  </div>
</template>

<style scoped>

</style>
