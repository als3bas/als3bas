export interface InfoProps {
  name: string
  age: number
  email: string
  education: {
    title: string
    institution: string
  }
  job: {
    position: string
    where: string
  }
  hobbies: Array<{
    name: string
    icon: string
  }>
}
