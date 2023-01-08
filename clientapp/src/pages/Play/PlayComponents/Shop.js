import { useState } from "react"
import { useDispatch } from "react-redux"
import { 
  Grid,
  IconButton,
  Stack,
  Typography
} from "@mui/material"
import { ArrowBack, MenuBook } from '@mui/icons-material'
import { updateGameState, updateShopState } from "../../../store/reducers/game"
import { GameStates, StoreStates } from "../Helpers/GameStates"
import { VisitedShopArticle } from "../Helpers/ArticleHelper"
import BackButton from "./BackButton"

const Shop = () => {
  const [usedShop, setUsedShop] = useState(false)
  const dispatch = useDispatch()

  const clickBackHandler = () => {
    if (usedShop) dispatch(updateShopState(StoreStates.CLOSED))

    dispatch(updateGameState(GameStates.SELECTION))
  }

  return (
    <Grid container
      spacing={3}
      id="shop-container"
    >
      <Grid item xs={1}>
        <BackButton clickHandler={clickBackHandler} />
      </Grid>

      <Grid item 
        xs={10}
        className="main-article-title-container"  
      >
        <h1 className="main-article-title article-title">
          {VisitedShopArticle.title}
        </h1>
      </Grid>

      <Grid item xs={12}
        className="main-article-image-container"
      >
        <Stack direction="row" justifyContent="center">
          <div className='article-image'
            style={{ height: '400px', width: '90%' }}
          ></div>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <Typography className="article-title" variant="h1">
          DRY GOODS
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Shop