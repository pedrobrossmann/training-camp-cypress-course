const locators = {
    login: {
        user: '[data-test=email]',
        password: '[data-test=passwd]',
        btn_login: '.btn'
    },

    mensagem: {
        sucesso: ('.toast-success'),
        erro: ('.toast-error')
    },
    
    menu: {
        contas:{
            selectConfig: '[data-test=menu-settings]',
            acessarPaginaContas: '[href="/contas"]',
            nameConta:  '[data-test=nome]',
            salvarConta: '.btn'
        }
    }
}

export default locators;