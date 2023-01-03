import { createStore } from "redux";
import { render } from "..";
import Page from "../components/Page";
import PageContainer from "../components/PageContainer";


function SetNavBarOption(state={value:'Home'},action){
    switch(action.type){
        case 'Set/Home':
            return {value:'Home'}
        case 'Set/SignIn':
            return {value:'SignIn'}
        case 'Set/SignUp':
            return {value:'SignUp'}
        case 'Set/Article':
            return {value:'Article'}
        default:
            return state
    }
}

export let store = createStore(SetNavBarOption)

store.subscribe(render)

