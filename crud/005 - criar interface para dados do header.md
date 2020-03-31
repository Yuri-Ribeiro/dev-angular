##### 1 - Com o terminal aberto na pasta frontend, criar pasta header, executando:
mkdir src/app/components/template/header


##### 3 - Crie o arquivo header.model.ts dentro da pasta frontend→src→app→components→template→header


##### 2 - Descrever como será os dados do header, criando interface HeaderData em header.model.ts:
export interface HeaderData {
    title: string
    iconName: string
    routeURL: string
}