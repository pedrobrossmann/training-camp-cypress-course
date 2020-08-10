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
        movimentacao: {
            tipoReceita: '[data-test=tipo-receita]',
            tipoDespesa: '[data-test=tipo-despesa]',  
            selectConfig: ('.fa-hand-holding-usd'),
            dataTransacao: '[data-test=data-transacao]',
            dataPagamento: '[data-test=data-pagamento]',
            descricao: '[data-test=descricao]',
            valor: '[data-test=valor]',
            interessado: '[data-test=envolvido]',
            status: '[data-test=status]',
            salvarMovimentacao: '.btn-primary',
            listaContas: '.list-group li'
        }, 
        contas:{
            selectConfig: '[data-test=menu-settings]',
            acessarPaginaContas: '[href="/contas"]',
            nameConta:  '[data-test=nome]',
            salvarConta: '.btn'
        }   
    },

    extrato:{
        
        FN_XP_Saldo: nome => `//td[contains(., '${nome}')]/../td[2]`,
        FN_excluirConta: nome => `//span[contains(.,'${nome}')]/../../..//i[@class = 'far fa-trash-alt']`
    }
}

export default locators;