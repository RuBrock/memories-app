import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Skeleton,
  Grid
} from '@mui/material';

import useStyles from './styles';

const MemorySkeleton = () => {
  const classes = useStyles();

  return (
    <Grid
      xs={12}
      sm={12}
      md={6}
      item
    >
      <Card className={classes.card}>
        <Skeleton
          sx={{ height: 150, marginBottom: 4 }}
          animation="wave"
          variant="rectangular"
        />

        <Typography
          className={classes.title}
          variant="h5"
          gutterBottom
        >
          <Skeleton animation="wave" />
        </Typography>

        <CardContent>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </CardContent>

        <CardActions className={classes.cardActions}>
          <Skeleton animation="wave" width="20%" />

          <Skeleton animation="wave" width="20%" />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default MemorySkeleton;