import { createStore } from "redux";
import { render } from "..";



function SetGlobalState(state={CurrentNavTab:'Home',PrevNavTab:'',Slug:''},action){
    switch(action.type){
        case 'Set/Home':
            return {CurrentNavTab:'Home',PrevNavTab:action.PrevNavTab}
        case 'Set/SignIn':
            return {CurrentNavTab:'SignIn',PrevNavTab:action.PrevNavTab}
        case 'Set/SignUp':
            return {CurrentNavTab:'SignUp',PrevNavTab:action.PrevNavTab}
        case 'Set/ArticlePage':
            return {CurrentNavTab:'ArticlePage',PrevNavTab:action.PrevNavTab,Slug:action.slug}
        default:
            return state
    }
}

export let store = createStore(SetGlobalState)

store.subscribe(render)

