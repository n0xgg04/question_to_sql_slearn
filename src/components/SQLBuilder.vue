<script setup lang="ts">
  import {useStore} from "vuex";
  import {computed, reactive, ref, watch} from "vue";

  function addslashes(str: string) {
    str=str.replace(/\\/g,'\\\\');
    //str=str.replace(/\'/g,'\\\'');
    str=str.replace(/\"/g,'\\"');
    str=str.replace(/\0/g,'\\0');
    return str;
  }

  const state = useStore()
  const questions = state.state
  const questionIdFrom = ref(0)
  const attachmentId = ref(123)

  const sql = computed(() => questions.questions.map((item: typeof questions.questions, index: number) => {
    return `INSERT INTO questions(question_id, question, options, correct_option) VALUES ('${Number(index)+Number(questionIdFrom.value)}','${item.title}','${addslashes(JSON.stringify(item.options))}','${item.correct}');
INSERT INTO attachments_questions(attachments_attachments_id,questions_question_id) VALUES ('${attachmentId.value}','${Number(index)+Number(questionIdFrom.value)}')`
  }))

  const click = () => {
    navigator.clipboard.writeText(sql.value.join(";"))
  }

</script>

<template>
  <div class="flex flex-row">
    <p>QuestionId Start :</p>
    <input v-model="questionIdFrom"/>
  </div>
  <div class="flex flex-row mt-2">
    <p>Attachment Id :</p>
    <input v-model="attachmentId"/>
  </div>
  <button @click="click" class="bg-amber-200 px-5 mt-2 py-1 rounded-lg">Copy</button>
  <code class="text-sm mt-5 block">{{sql.join(";\n")}}
  </code>
</template>

<style scoped>

</style>
