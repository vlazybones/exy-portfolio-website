import React, { useEffect, useState } from "react"
import './skills.css';
import { Html5OriginalWordmark, Css3OriginalWordmark,  JavascriptPlain, NodejsOriginal, JqueryOriginalWordmark, MysqlOriginalWordmark, JavaOriginalWordmark, SpringOriginalWordmark, ReactOriginalWordmark, CsharpPlain, PythonOriginalWordmark } from 'devicons-react';

function HoverableIcon({ icon, defaultSize }) {
    const [isHovered, setIsHovered] = useState(false);
    const iconSize = isHovered ? "90" : defaultSize;
  
    return (
      <icon.type
        size={iconSize}
        className="icon-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    );
  }

function Skills() {
  return (
    <>
      <section id="skills">
      <span className="skillTitle">Programming Skills</span>
      <span className="skillDesc">I have had the opportunity to immerse myself in a diverse array of programming languages. </span>
      <div className="skillBars">
        <div className="skillBar">
          <HoverableIcon icon={<Html5OriginalWordmark />} defaultSize="70" />
          <HoverableIcon icon={<Css3OriginalWordmark />} defaultSize="70" />
          <HoverableIcon icon={<JavascriptPlain />} defaultSize="70" />
          <HoverableIcon icon={<NodejsOriginal />} defaultSize="70" />
          <HoverableIcon icon={<JqueryOriginalWordmark />} defaultSize="70" />
          <HoverableIcon icon={<MysqlOriginalWordmark />} defaultSize="70" />
          <HoverableIcon icon={<JavaOriginalWordmark />} defaultSize="70" />
          <HoverableIcon icon={<SpringOriginalWordmark />} defaultSize="70" />
          <HoverableIcon icon={<ReactOriginalWordmark />} defaultSize="70" />
          <HoverableIcon icon={<CsharpPlain />} defaultSize="70" />
          <HoverableIcon icon={<PythonOriginalWordmark />} defaultSize="70" />
        </div>
      </div>
      </section>
    </>
  )
}

export default Skills