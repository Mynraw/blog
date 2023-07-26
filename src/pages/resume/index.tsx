import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { FaGraduationCap } from 'react-icons/fa';
import { BsKeyboardFill } from 'react-icons/bs';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'next-themes';

import resumeData from '~/data/resumeData';

const ResumePage: NextPage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section>
      <VerticalTimeline
        animate={true}
        lineColor={theme === 'dark' ? '#fff' : '#0d0d0d'}
      >
        {resumeData.map((element) => {
          return (
            <VerticalTimelineElement
              intersectionObserverProps={{ triggerOnce: false }}
              key={element.id}
              date={element.date}
              contentStyle={{
                background: theme === 'dark' && mounted ? '#fff' : '#0d0d0d',
                color: theme === 'dark' && mounted ? '#0d0d0d' : '#fff',
                borderRadius: '20px',
              }}
              contentArrowStyle={{
                borderRight: `8px solid ${
                  theme === 'dark' && mounted ? '#fff' : '#0d0d0d'
                }`,
              }}
              visible={false}
              dateClassName="text-black dark:text-white sm:hidden"
              textClassName="text-black dark:text-white"
              icon={
                element.icon === 'education' ? (
                  <FaGraduationCap />
                ) : (
                  <BsKeyboardFill />
                )
              }
              iconClassName="text-4xl w-20 bg-white dark:bg-[#0d0d0d]"
            >
              <h3 className="text-xl font-bold">{element.title}</h3>
              <h5 className="opacity-70">{element.location}</h5>
              <p id="description">{element.description}</p>

              <a
                className={'text-lime-500'}
                href="https://p.bdir.in/p/responsive-event-timeline-component-for-reactjs/7714"
              >
                {element.id}
              </a>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default ResumePage;
