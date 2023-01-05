import { Divider, Grid, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { VisitedShopArticle } from "../Helpers/ArticleHelper"

const Shop = () => {
  return (
    <Grid container
      spacing={3}
      id="shop-container"
    >
      <Grid item 
        xs={12}
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