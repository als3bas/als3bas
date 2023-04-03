import { Timeline } from '@mui/lab';
import { PropTypes } from 'prop-types';
import TimeLineItem from './TimeLineItem';

function TimeLine({ timeline }) {
  return (
    <>
      <h1 className="text-4xl py-10 font-bold text-center uppercase">
        Résumé
      </h1>
      <Timeline position="alternate" id="timeline-custom">
        {timeline.sort((a, b) => b.order - a.order).map((item) => (
          <TimeLineItem
            key={item.order}
            place={item.place}
            startDate={item.start_date}
            endDate={item.end_date}
            icon={item.icon}
            title={item.title}
            description={item.description}
            color="warning"
          />
        ))}
      </Timeline>
    </>

  );
}

TimeLine.propTypes = {
  timeline: PropTypes.arrayOf(Object).isRequired,
};

export default TimeLine;
