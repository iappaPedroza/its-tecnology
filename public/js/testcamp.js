// Meu primeiro React Cru
// Iniciando testes com React e JSX
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
        return e(
          'h1',
          '',
          'Curtido'
        );
      }
  
      return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        '- Curtir -'
      );
    }
  }

  const domContainer = document.querySelector('#like_button_container');
  ReactDOM.render(e(LikeButton), domContainer);
  
  class Loader extends React.Component { 
    render() {
      return e(`h1`, null, `Olá ${this.props.toWhat}`);
    }
  }
  class paragraph extends React.Component {
    render() {
        return e(`p`, null, `${this.props.content}`);
      } 
  }
  const loaderTarget = document.querySelector("#camada");
  ReactDOM.render(e(Loader,{toWhat: "Mundo!" }, null), loaderTarget);

  const meuAlvo = document.querySelector('.root');
  ReactDOM.render(e(paragraph,{content: 'Agora - Me parece que estou caminhando com o React!'}, null), meuAlvo)