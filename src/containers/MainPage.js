import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: 'https://unsplash.com/photos/7AIDE8PrvA0',
    title: 'Add New Entry',
    width: '40%',
    link: "/newSearch",
  },
  {
    url: 'https://unsplash.com/photos/7AIDE8PrvA0',
    title: 'View Old Entries',
    width: '30%',
    link:"/pastentry",
  },
  {
    url: 'https://unsplash.com/photos/7AIDE8PrvA0',
    title: 'All Users Feed',
    width: '30%',
    link:"/allentries",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // display: '',
    // flexWrap: 'wrap',
    display: "flex",
    // flexWrap: "wrap",
    minWidth: 300,
    width: '100%',
  },
  image: {
    // position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));


const SongCards = (props) => {
  const classes = useStyles();
  return(
    <>
      <h1>Music Diary</h1>
  <div className="cards">
    {/* <Link to="/newentry" ><div className="btn nav-link">Add new Entry </div></Link>
    <Link to="/pastentry" ><div className="btn nav-link">Old Entry </div></Link>
    <Link to="/allentries" ><div className="btn nav-link">All Entires </div></Link>
 */}
  
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          >
          </span>
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              to="/signal"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <span className={classes.imageMarked} />
              <Link to={image.link} >  {image.title} </Link>
            </Typography>
            
          </span>
        </ButtonBase>
      ))}
    </div>







  </div>
  </>
  )
}

const msp = (state) => ({
  // songs: state.songs.songs
})

export default connect(msp)(SongCards)