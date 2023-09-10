# TrackIt

FrontEnd application developed in ReactJs for routine activities management. Here, you can organize your daily routine and activities by day and track it all in one aplication!

Try it out now on the application deploy: https://projeto11-trackit-murex-gamma.vercel.app/ <br/> <br/>

## About

- [x] Em estados globais (como usuário logado e progresso do dia) utilizei recursos da ContextAPI para evitar State Dealing
- [x] Tela Login (rota `/`) utilizando a biblioteca react-loader-spinner para fase de carregamento
- [x] Tela Cadastro `/cadastro` /cadastro)
- [x] Topo são exibidas as informações do usuário
- [x] No Menu o botão de Hoje rota `/hoje` deve exibir uma barra de progresso circular indicando a porcentagem de conclusão de hábitos do usuario usando utilizando a biblioteca react-circular-progressbar
- [x] A tela de Habitos rota `/habitos` carrega os hábitos do usuário através de uma requisicao axios para uma API privada
- [x] Tela hoje rota `/hoje` carrega todos os hábitos cadastrados ao dia correspondente utilizando a biblioteca dayjs

## Installation

```bash
$ git clone https://github.com/CleiverCoelho/trackit
$ cd trackit
$ npm install
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
