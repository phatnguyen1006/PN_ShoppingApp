import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
    const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  // Check Current Page
  const isDifWeb = location.pathname !== ("/");
  console.log(isDifWeb);
    // Func to goBack
    const HandleBack = () => {
      history.push("/");
    }

  return isDifWeb &&
  (<div className={classes.root}>
    <Button onClick={HandleBack} variant="contained" color="primary">
      Home
    </Button>
  </div>);
}
