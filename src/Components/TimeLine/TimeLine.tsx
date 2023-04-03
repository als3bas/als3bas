import { Timeline } from '@mui/lab';
import TimeLineItem from './TimeLineItem';
import { type TimeLineItemProps } from '../../Types/TimeLine';

interface TimeLineProps {
  timeline: TimeLineItemProps[]
}

function TimeLine({ timeline }: TimeLineProps) {
  return (
    <>
      <h1 className="text-4xl py-10 font-bold text-center uppercase">Résumé</h1>
      <Timeline position="alternate" id="timeline-custom">
        {timeline
          .sort((a, b) => b.order - a.order)
          .map((item) => (
            <TimeLineItem
              key={item.order}
              place={item.place}
              startDate={item.start_date}
              endDate={item.end_date}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color="warning"
              order={item.order}
            />
          ))}
      </Timeline>
    </>
  );
}

export default TimeLine;
