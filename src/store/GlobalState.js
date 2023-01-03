import { createStore } from "redux";
import { render } from "..";
import Page from "../components/Page";
import PageContainer from "../components/PageContainer";


function SetNavBarOption(state={value:'Home',prevValue:''},action){
    switch(action.type){
        case 'Set/Home':
            return {value:'Home',prevValue:action.prevValue}
        case 'Set/SignIn':
            return {value:'SignIn',prevValue:action.prevValue}
        case 'Set/SignUp':
            return {value:'SignUp',prevValue:action.prevValue}
        case 'Set/ArticlePage':
            return {value:'ArticlePage',prevValue:action.prevValue}
        default:
            return state
    }
}

export let store = createStore(SetNavBarOption)

store.subscribe(render)

