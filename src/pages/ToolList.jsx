import React from "react";
import { useNavigate, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ToolListItem from "../components/ToolListItem";

const ToolList = () => {

    let navigate = useNavigate();

    const tools = [
        {
            id: 1,
            tool: "Muscle Relaxation",
            style: "tool-list-item-enabled",
            slug: "/intro-1"
        },{
            id: 2,
            tool: "Seated Practice",
            style: "tool-list-item-enabled",
            slug: ""
        },{
            id: 3,
            tool: "Tool",
            style: "tool-list-item-disabled",
            slug: ""
        },{
            id: 4,
            tool: "Tool",
            style: "tool-list-item-disabled",
            slug: ""
        },{
            id: 5,
            tool: "Tool",
            style: "tool-list-item-disabled",
            slug: ""
        },{
            id: 6,
            tool: "Tool",
            style: "tool-list-item-disabled",
            slug: ""
        },{
            id: 7,
            tool: "Tool",
            style: "tool-list-item-disabled",
            slug: ""
        },{
            id: 8,
            tool: "Tool",
            style: "tool-list-item-disabled",
            slug: ""
        }
    ]

    return (
        <div className="frame">
            <Navbar onClickFunc={() => navigate(-1)} />
            <div className="container nav-padding padding-bottom">
                <h1 className="tool-title">Tools</h1>
                <div>
                    {tools.map((tool) => {
                        return (
                            <Link to={tool.slug}>
                                <ToolListItem
                                    key={tool.id}
                                    tool={tool.tool}
                                    style={tool.style}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default ToolList;