export interface TimeLineItemProps {
  order: number
  place: string
  startDate?: string | null
  endDate?: string | null
  start_date?: string | null
  end_date?: string | null
  icon?: any
  title: string
  description: string
  color?: any
};

export interface IconMap {
  [key: string]: string
  school: string
  job: string
  briefcase: string
  code: string
};
