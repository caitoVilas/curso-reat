import Reatc, {Component} from 'react';

export default class CicloVida extends Component{
    constructor(props){
        super(props);
        //console.log(0,"El componente se incializa aun no esta en el DOM");
        this.state = {
            fecha: new Date().toLocaleTimeString(),
            visible: false   
        }
        this.temporizador = null; 
    }
    componentDidMount(){
        //console.log(1,"El componente ya se encuentra en el DOM");
    }
    componentDidUpdate(prevProps, prevState){
        //console.log(2,"El estado o las props del componente han cambiado");
        //console.log(prevProps);
        //console.log(prevState);
    }

    iniciar = (e) => {
        this.ticTac();
        this.setState({
            visible: true
        });
    };
    detener = (e) =>{
        clearInterval(this.temporizador);
        this.setState({
            visible: false
        });
    };
    ticTac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                fecha: new Date().toLocaleTimeString()
            });
        },1000);
    };
    render(){
        //console.log(4,"El componente se dibuja o redibuja");
        return(
            <>
                <h2>Ciclo de vida Componentes de clase</h2>
                {this.state.visible &&<Reloj fecha={this.state.fecha} />}
                <button onClick={this.iniciar}> iniciar</button>
                <button onClick={this.detener}> detener</button>
            </>
        );
    };
}

class Reloj extends Component{
    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        //console.log(3,"El componente ha sido eliminado del DOM");
    }
    render(){
        return(
            <h3>{this.props.fecha}</h3>
        );
    }
}