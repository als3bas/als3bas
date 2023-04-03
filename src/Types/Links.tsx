export interface Links {
  name: string
  url: string
  emoji: string
}

export interface LinksProps {
  links: {
    social_networks: Links[]
    personal_stuff: Links[]
  }
}
