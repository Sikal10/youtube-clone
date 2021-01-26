import React from 'react';
import "./SidebarRow.css"
import Avatar from "@material-ui/core/Avatar";

const SidebarRow = ({ Avatar, selected, Icon, title}) => {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            {Icon &&  <Icon className={"sidebarRow__icon"}/>}
            {Avatar && <Avatar style={{height: "30px", width: "30px"}} />}
            <h2 className={"sidebarRow__title"}>{title}</h2>
        </div>
    );
};

export default SidebarRow;