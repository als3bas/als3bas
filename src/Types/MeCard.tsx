import { type InfoProps } from './Info';

export interface MeCardProps {
  children: React.ReactNode
  title: string
}

export interface MeProps {
  info: InfoProps
  learning: string[]
  skills: string[]
}
