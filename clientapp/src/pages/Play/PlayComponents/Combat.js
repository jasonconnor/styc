import { useSelector } from "react-redux"

const Combat = () => {
  const enemy = useSelector(state => state.game.CurrentEnemy)

  return (
    <div>
      {enemy && enemy.Name}
    </div>
  )
}

export default Combat