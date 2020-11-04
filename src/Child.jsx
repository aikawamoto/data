import React from 'react'; import ReactDOM from 'react-dom'; 
import { Card, Button } 
from 'react-onsenui';

import Grandchild from 'Grandchild.jsx';

export default class Child extends React.Component {
constructor(props) { 
  super(props);

}

render() { 
  return ( 
    <Card> 
    <div className="title">Childコンポーネント</div> 
    <div className="content"> <div>
    Appから渡されたcount={this.props.count}</div> 
    <hr /> 
    <Button modifier="large" onClick={this.props.decrementCount}>Down</Button> 

    
    <Grandchild count={this.props.count} clearCount={this.props.clearCount}  /> 
    
    </div> 
    </Card> 
    ); 
   }
}