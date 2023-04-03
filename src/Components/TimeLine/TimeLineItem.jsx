import { PropTypes } from 'prop-types';
import {
  TimelineOppositeContent,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from '@mui/lab';
import Icon from '@mdi/react';
import {
  mdiAccount,
  mdiSchool,
  mdiBriefcase,
  mdiCodeJson,
} from '@mdi/js';

const iconMap = {
  school: mdiSchool,
  job: mdiAccount,
  briefcase: mdiBriefcase,
  code: mdiCodeJson,
};

function TimeLineItem({
  place, startDate, endDate, icon, title, description, color,
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >

        <div className="text-white text-opacity-20">
          <div className="font-black">
            {startDate}
            {endDate ? ` - ${endDate}` : ''}
          </div>
          <div className="italic">{place}</div>
        </div>

      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector className="opacity-25" />
        <TimelineDot color={color} variant="filled">
          <div className="w-full">
            <Icon path={iconMap[icon]} size={1} />
          </div>
        </TimelineDot>
        <TimelineConnector className="opacity-25" />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '40px', px: 2 }}>
        <div className="underline capitalize">{title}</div>
        <div className="font-thin italic">{description}</div>
      </TimelineContent>
    </TimelineItem>
  );
}

TimeLineItem.propTypes = {
  place: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string,
};

TimeLineItem.defaultProps = {
  color: 'primary',
  endDate: null,
};

export default TimeLineItem;
