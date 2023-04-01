import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NaviUseState } from "../components/Navi";
import "../styles/common.css";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1",
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2",
    },
    {
        tab: "Section 3",
        content: "I'm the content of the Section 3",
    }
]

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if(!allTabs || !Array.isArray(allTabs)){ // tabs가 비었거나 배열이 아닌경우 패스
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

function UseTabs() {
    const { currentItem, changeItem } = useTabs(0, content);
    // 초기값은 allTabs[0] => content[0]
    return (
        <div>
            <h1>useTabs</h1>
            <Link to="/useState">&larr; UseState Home</Link>
            <NaviUseState />
            {content.map((section, index )=> (
            <button onClick={()=> changeItem(index)}>{section.tab}</button>
            ))}
            <div>
                {currentItem.content}
            </div>
        </div>
    );
    /*
        map 을 통해 
        section(content) 는 content[0], content[1], content[2]
        index 는 0, 1, 2 
        순서대로 button 태그의 속성으로 들어간다.

        <button onClick={()=> changeItem(0)}>{content[0].tab}</button>
        <button onClick={()=> changeItem(1)}>{content[1].tab}</button>
        <button onClick={()=> changeItem(2)}>{content[2].tab}</button>
    */
};
export default UseTabs;