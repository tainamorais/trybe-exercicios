import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gravacoes from './pages/Gravacoes';
import Conteudo from './pages/Conteudo';
import PageNotFound from './pages/PageNotFound';
import ConteudoDetalhes from './pages/ConteudoDetalhes';
import Header from './components/Header';

/*
As rotas são definidas no App, onde queremos que as coisas sejam renderizadas.
1ª coisa a fazer: importar Switch e Route.
2ª coisa a fazer, o Switch: o que garante que se entre em apenas uma rota por vez.
3. Descrever cada uma das rotas. Path é o caminho e depois definir o component que vai ser carregado.
*/

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/gravacoes" component={ Gravacoes } />
        <Route exact path="/conteudo" component={ Conteudo } />
        <Route exact path="/conteudo/:id" component={ ConteudoDetalhes } />
        <Route exact path="*" component={ PageNotFound } />
      </Switch>
    )
  }
}


export default App;
