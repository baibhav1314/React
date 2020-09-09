import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class Menu extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const menu = this.props.dishes.map((dish) => {
         return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
               {/* <Media tag="li">
                  <Media left middle>
                        <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                     <Media heading>{dish.name}</Media>
                     <p>{dish.description}</p>
                  </Media>
               </Media>  */}
               <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
            </div>
         );
      });
      

      return(
         <div className="container">
            <div className="row">
               {/* <Media list>
                  {menu}
               </Media> */}
               {menu}
            </div>
         </div>
      );
   }
}

export default Menu;

