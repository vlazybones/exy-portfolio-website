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
        <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        target="_blank"
        rel="noopener noreferrer"
        >
        <HoverableIcon icon={<Html5OriginalWordmark />} defaultSize="70" />
        </a>
        <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
        rel="noopener noreferrer"
        >
        <HoverableIcon icon={<Css3OriginalWordmark />} defaultSize="70" />
        </a>
        <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noopener noreferrer"
        >
        <HoverableIcon icon={<JavascriptPlain />} defaultSize="70" />
        </a>
        <a
        href="https://developer.mozilla.org/en-US/docs/Glossary/Node.js"
        target="_blank"
        rel="noopener noreferrer"
        >
        <HoverableIcon icon={<NodejsOriginal />} defaultSize="70" />
        </a>
        <a
        href="https://jquery.com/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <HoverableIcon icon={<JqueryOriginalWordmark />} defaultSize="70" />
        </a>
        <a
        href="https://www.oracle.com/mysql/what-is-mysql/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <HoverableIcon icon={<MysqlOriginalWordmark />} defaultSize="70" />
        </a>
        <a
        href="https://www.ibm.com/topics/java"
        target="_blank"
        rel="noopener noreferrer"
        >
        <HoverableIcon icon={<JavaOriginalWordmark />} defaultSize="70" />
        </a>
        <a
        href="https://spring.io/projects/spring-boot"
        target="_blank"
        rel="noopener noreferrer"
        >
        <HoverableIcon icon={<SpringOriginalWordmark />} defaultSize="70" />
        </a>
        <a
        href="https://legacy.reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <HoverableIcon icon={<ReactOriginalWordmark />} defaultSize="70" />
        </a>
        <a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <HoverableIcon icon={<CsharpPlain />} defaultSize="70" />
        </a>
        <a
        href="https://www.python.org/about/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <HoverableIcon icon={<PythonOriginalWordmark />} defaultSize="70" />
        </a>
        </div>
      </div>
      </section>
    </>
  )
}

export default Skills