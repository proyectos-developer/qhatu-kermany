import {datatypes} from '../actions/data.js'

const initial_state = {
    authenticated: false,
    open_menu_main: true,
    sub_menu_producto: 'descripcion'
}

const data = (state = initial_state, action) => {
    if (action.type === datatypes.SET_AUTHENTICATED){
        const authenticated = action.authenticated
        return {
            ... state,
            authenticated
        }
    }else if (action.type === datatypes.SET_OPEN_MENU_MAIN){
        const open_menu_main = action.open_menu_main
        return {
            ... state,
            open_menu_main
        }
    }else if (action.type === datatypes.SET_SUB_MENU_PRODUCTO){
        const sub_menu_producto = action.sub_menu_producto
        return {
            ... state,
            sub_menu_producto
        }
    }else{
        return state
    }
}

export default data