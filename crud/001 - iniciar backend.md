##### 1 - criar pasta "fenix" do projeto

##### 2 - dentro da pasta "fenix", criar pasta "backend" e abrir terminal nela

##### 3 - npm init -y

##### 4 - npm i json-server@0.16.0
## Segundo a documentação do npm, vai automaticamente para dependências de produção (é o mesmo que usar a flag -P)
## https://docs.npmjs.com/cli/install

##### 5 - adicionar o script abaixo
    "start": "json-server --watch db.json --port 3001"

##### 6 - criar arquivo db.json com dados a seguir
{
"products": [
    {
      "name": "X-Búrguer",
      "price": 10.5,
      "id": 2
    },
    {
      "name": "X-Bacon",
      "price": 12.5,
      "id": 3
    },
    {
      "name": "X-Tudo",
      "price": "14.5",
      "id": 4
    }
  ]
}