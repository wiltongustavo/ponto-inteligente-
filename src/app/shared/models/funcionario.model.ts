import { Lancamento } from "./lancamento.model";

export interface Funcionario {
    email: string,
    cpf: string,
    perfil: string,
    valorHora?: string,
    qtdHorasTrabalhoDia?: string,
    qtdHorasAlmoco?: string,
    lancamentos?: Lancamento[],
    id?: string
}