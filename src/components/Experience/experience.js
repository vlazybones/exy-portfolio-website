import React, { useEffect } from "react"
import './experience.css'
import { ReactComponent as WorkIcon } from "./work.svg"
import { ReactComponent as SchoolIcon } from './school.svg'
import timelineElements from "./experiencefiles"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";

let workIconStyles = { background: "#778ca3" };
let schoolIconStyles = { background: "#4b6584" };

function Experience () {
  return (
    <>
        <section id="experience">
        <span className="experienceTitle">Experience</span>
        <VerticalTimeline>
            {
                timelineElements.map(element => {
                    let isWorkIcon = element.icon === "work";
                    return (
                        <VerticalTimelineElement
                            key={ element.key }
                            date={ element.date }
                            dateClassName="date"
                            iconStyle={ isWorkIcon ? workIconStyles : schoolIconStyles }
                            icon={ isWorkIcon ? <WorkIcon /> : <SchoolIcon /> }
                            >
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.location}
                            </h5>
                            <p id="description">
                                {element.description}
                            </p>
                            </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
        </section>
    </>
  )
}

export default Experience 