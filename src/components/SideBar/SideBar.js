import React from "react";

const Sidebar = () => {
    return(
        <div className='ui segment pushable'>
            <div className='ui inverted vertical labeled icon ui overlay left thin visible sidebar menu'>
                <a className='item'>
                    <i aria-hidden='true' className='home icon'/>
                    111
                </a>
                <a className='item'>
                    <i aria-hidden='true' className='gamepad icon'/>
                    222
                </a>
                <a className='item'>
                    <i aria-hidden='true' className='camera icon'/>
                    333
                </a>
            </div>
            <div className='pusher'>
                <div className='ui basic segment'>
                    <h3 className='ui header'>Application Content</h3>
                    <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' className='ui image'/>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;