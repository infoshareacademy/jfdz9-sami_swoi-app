import React , {Component} from "react";
import moment from "moment";

class Sidebar extends Component{
   componentDidMount(){
       fetch('/Data/job_offers.json')
           .then(response => response.json())
           .then(job_offers => {
               console.log(job_offers);

               // const formattedOffers = job_offers.map(offer =>{
               //     return moment(offer.createdAt).format('DD-MM-YYYY')
               // });
               // console.log(formattedOffers)

               job_offers.sort((offer1, offer2) => {
                   const momentCond1 = moment(offer1.createdAt);
                   const momentCond2 = moment(offer2.createdAt);
                   if (momentCond1.isAfter(momentCond2)) {
                       return 1;
                   }
                   if (momentCond1.isBefore(momentCond2)) {
                       return -1;
                   }
                   return 0;
               })

               console.log(job_offers)

           })
   }


    render(){
    return(
        <div className='ui segment pushable'>
            <div className='pusher'>
                <div className='ui basic segment'>
                    <h3 className='ui header'>SideBar ;P</h3>

                </div>
            </div>
        </div>
    )}
};

export default Sidebar;