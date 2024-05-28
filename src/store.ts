import {createStore} from "vuex";
import _ from "lodash"

type Question = {
    title: string;
    options: string[];
    correct: number;
}

const store = createStore({
    state () {
        return {
           questions: [] as Question[]
        }
    },
    mutations: {
        newQuestion(state: typeof store.state){
            state.questions.push({
                title: "New",
                options:["A. ","B. ","C. ","D. "],
                correct: 0,
            })
        },
        update(state: any, payload: { index: number; data: Question }) {
            state.questions[payload.index] = payload.data;
        },
        deleteQues(state: any, payload: {index:number}){
            state.questions.splice(payload.index,1)
        }
    }
})


export default store
