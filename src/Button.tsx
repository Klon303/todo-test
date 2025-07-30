type Props = {
  title: string
 deleteTask: (taskId:number) => void

}

export const Button = ({ title, onClickHandler}: Props) => {
  return ( 
  <button onClick={onClickHandler}>{title}</button>
  )
}
