export const datatypes = {
    SET_AUTHENTICATED: 'SET_AUTENTICATED',
    SET_OPEN_MENU_MAIN: 'SET_OPEN_MENU_MAIN',
    SET_SUB_MENU_PRODUCTO: 'SET_SUB_MENU_PRODUCTO'
}

export const set_authenticated = authenticated => {
    return {
        authenticated,
        type: datatypes.SET_AUTHENTICATED
    }
}

export const set_open_menu_main = open_menu_main => {
    return {
        open_menu_main,
        type: datatypes.SET_OPEN_MENU_MAIN
    }
}

export const set_sub_menu_producto = sub_menu_producto => {
    return {
        sub_menu_producto,
        type: datatypes.SET_SUB_MENU_PRODUCTO
    }
}