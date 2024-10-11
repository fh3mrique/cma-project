
# Instruções para Configurar o Projeto Angular na Versão 16

## Pré-requisitos

### 1. **Java**  
   - Versão mínima: **17**
   - Certifique-se de que o Java está corretamente instalado e configurado na sua máquina. Você pode verificar a versão atual com o comando:
     ```bash
     java -version
     ```

### 2. **Node.js**  
   - **Node** pode ser qualquer versão, mas a versão **20** é recomendada para padronização.
   - Verifique se o Node está instalado e atualizado com o comando:
     ```bash
     node -v
     ```

### 3. **IDE Recomendadas**
   - **IntelliJ IDEA** para desenvolvimento back-end (Java/Spring).
   - **Visual Studio Code (VSCode)** para desenvolvimento front-end (Angular).

---

## Passos para Configurar o Frontend (Angular)

### 1. **Acessar o diretório do monorepo**  
   Primeiramente, entre no diretório do monorepo que contém o código do projeto:

   cd caminho/para/o/monorepo/frontend
2. Instalar a CLI do Angular na versão 16
Como o Angular CLI disponível mais recente é a versão 17, você precisa instalar a versão 16 para garantir compatibilidade com o projeto. Para isso, execute o seguinte comando:

bash
Copiar código
 ```bash
npm install -g @angular/cli@16
```
Isso instalará a CLI do Angular versão 16 globalmente na sua máquina, garantindo que você possa criar e rodar projetos Angular na versão 16.

3. Executar o projeto
Após instalar a versão correta da CLI, você pode iniciar o servidor de desenvolvimento Angular com o comando:


Copiar código
 ```bash
ng serve
```
O projeto estará disponível para acesso no navegador, geralmente no endereço 
http://localhost:4200.

