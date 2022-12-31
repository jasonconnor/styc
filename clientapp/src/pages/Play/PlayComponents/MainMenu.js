import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { ClosedClinicArticle, ClosedShopArticle, getRandomArticle, StartGameArticle } from '../Helpers/ArticleHelper';
import Article from './Article';
import { updateGameState } from '../../../store/reducers/game';

const MainMenu = () => {
  const dispatch = useDispatch();

  const randomArticle = useMemo(() => 
    getRandomArticle(2), []);

  const startNewGameClickHandler = () => {
    dispatch(
      updateGameState(1)
    )
  }

  return (
    <Grid container 
      spacing={3}
      id='main-menu-container'
    >
      <Grid item
        xs={12}
        className="main-article-title-container">
          <h1 className="main-article-title article-title clickable-article"
            onClick={startNewGameClickHandler}
          >
            {StartGameArticle.title}
          </h1>
      </Grid>

      <Grid item
        xs={8}
        className="main-article-image-container"
      >
        <div className='article-image'></div>
      </Grid>

      <Grid item
        xs={4}
        className="main-article-body-container"
      >
        <p className='article-body'>
          {StartGameArticle.body}
        </p>
      </Grid>

      <Grid item
        xs={4}
        className="closed-clinic-article"
      >
        <Article
          {...ClosedClinicArticle} 
        />
      </Grid>

      <Grid item
        xs={4}
        className="start-game-article"
      >
        <Article
          {...randomArticle} 
        />
      </Grid>

      <Grid item
        xs={4}
        className="closed-shop-article"
      >
        <Article
          {...ClosedShopArticle} 
        />
      </Grid>
    </Grid>
  )
}

export default MainMenu