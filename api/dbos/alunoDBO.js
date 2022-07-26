class Aluno {
    #nome
    #sobrenome
    #email
    #idade

    constructor(nome, sobrenome,email, idade) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#idade = idade
        this.#email = email 
    }

    get nome() {
        return this.#nome;
    }

    get sobrenome() {
        return this.#sobrenome
    }

    get email() {
        return this.#email
    }

    get idade() {
        return this.#idade;
    }

    set nome(nome) {
        if (nome === undefined || typeof nome !== 'string' || nome ==="" )
        throw ('Nome inválido')

        this.#nome = nome;
    }

    set sobrenome(sobrenome) {
        if (sobrenome === undefined || typeof sobrenome !== 'string' || sobrenome ==="" )
        throw ('sobrenome inválido')

        this.#sobrenome = sobrenome;
    }

    set email(email) {
        if (email === undefined || typeof email !== 'string' || email ==="" )
        throw ('email inválido')

        this.#email = email;
    }

    set idade(idade) {
        if (idade === undefined || typeof idade !== 'number' || idade <= 0 )
        throw ('Idade inválida')

        this.#idade = idade;
    }
   
}

function novo(nome, sobrenome,email, idade) {
    return new Aluno(nome, sobrenome,email, idade)
}

module.exports = {novo}