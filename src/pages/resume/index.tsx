import type { NextPage } from 'next';
// import {FaGraduationCap} from 'react-icons/fa'
// import { BsKeyboardFill } from 'react-icons/bs'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import timelineElements from '~/data/timelineData';

const ResumePage: NextPage = () => {
  return (
    <section className="mx-auto">
      <VerticalTimeline layout={'2-columns'} animate={true} lineColor="#fff">
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              intersectionObserverProps={{ triggerOnce: false }}
              key={element.id}
              date={element.date}
              visible={false}
              dateClassName="date"
              textClassName="text-black"
              //   iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>

              <a
                className={'text-lime-500'}
                href="https://p.bdir.in/p/responsive-event-timeline-component-for-reactjs/7714"
              >
                {element.buttonText}
              </a>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default ResumePage;
