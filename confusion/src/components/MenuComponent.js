import React from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay,
   CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem ({dish}) {
   return(
      <Card key={dish.id} >
         <Link to={`/menu/${dish.id}`} >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
         </Link>
      </Card>
   );
}

   const Menu = (props) => {
      const menu = props.dishes.map((dish) => {
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
               <RenderMenuItem dish={dish} />
            </div>
         );
      });
      

      return(
         <div className="container">
            <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Menu</BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                  <h3>Menu</h3>
                  <hr />
               </div>                
            </div>
            <div className="row">
               {/* <Media list>
                  {menu}
               </Media> */}
               {menu}
            </div>
         </div>
      );
   }

export default Menu;

