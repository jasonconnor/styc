import { Grid } from "@mui/material"
import { useDispatch } from "react-redux"
import { updateGameState } from "../../../store/reducers/game"
import { ReturnOfAHeroArticle, VisitedClinicArticle } from "../Helpers/ArticleHelper"
import { GameStates } from "../Helpers/GameStates"

const Clinic = () => {
  const dispatch = useDispatch()

  const clickReturnToSelectionHandler = () => {
    dispatch(updateGameState(GameStates.SELECTION))
  }

  return (
    <Grid container
      spacing={3}
      id="clinic-container"
    >
      <Grid item 
        xs={12}
      >
        <h1 className="article-title">
          {VisitedClinicArticle.title}
        </h1>
      </Grid>

      <Grid item xs={3}>
        <p className='article-body'>
          {VisitedClinicArticle.body[0]}
        </p>
        <p className='article-body'>
          {VisitedClinicArticle.body[1]}
        </p>
      </Grid>

      <Grid item xs={6}
        className="main-article-image-container"
      >
        <div className='article-image'></div>
      </Grid>

      <Grid item xs={3}>
        <p className='article-body'>
          {VisitedClinicArticle.body[2]}
        </p>
        <p className='article-body'>
          {VisitedClinicArticle.body[3]}
        </p>
      </Grid>

      <Grid item xs={12}>
        <h2 className="article-title clickable-article"
          onClick={clickReturnToSelectionHandler}
        >
          {ReturnOfAHeroArticle.title}
        </h2>
      </Grid>

      {ReturnOfAHeroArticle.body.map((section, index) => (
        <Grid key={index} item xs={3} className='article-body'>
          {section}
        </Grid>
      ))}
    </Grid>
  )
}

export default Clinic