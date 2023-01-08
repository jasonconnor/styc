import { Grid } from "@mui/material"
import { useDispatch } from "react-redux"
import { updateClinicState, updateGameState } from "../../../store/reducers/game"
import { VisitedClinicArticle } from "../Helpers/ArticleHelper"
import { GameStates, StoreStates } from "../Helpers/GameStates"
import BackButton from "./BackButton"

const Clinic = () => {
  const dispatch = useDispatch()

  const clickReturnToSelectionHandler = () => {
    dispatch(updateClinicState(StoreStates.CLOSED))
    dispatch(updateGameState(GameStates.SELECTION))
  }

  return (
    <Grid container
      spacing={3}
      id="clinic-container"
    >
      <Grid item xs={1}>
        <BackButton clickHandler={clickReturnToSelectionHandler} />
      </Grid>

      <Grid item 
        xs={10}
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
    </Grid>
  )
}

export default Clinic