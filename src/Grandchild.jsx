import React from 'react'; import ReactDOM from 'react-dom'; 
import { Card, Button } 
from 'react-onsenui';


export default class Grandchild extends React.Component {
constructor(props) { 
  super(props);

}



render() { 
  return ( 
    <Card> 
    <div className="title">Grandchildコンポーネント</div> 
    <div className="content"> <div>
    Childから渡されたcount={this.props.count}</div> 
    <hr /> 
    <Button modifier="large" onClick={this.props.clearCount}>Clear</Button> 
    
    </div> 
    </Card> 
    ); 
   }
}
