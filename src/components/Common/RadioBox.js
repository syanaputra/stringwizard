import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Radio, Grid, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    // margin: "auto",
    maxWidth: 500
  },
  heading: {
    fontSize: "1.25em",
    fontWeight: "600",
    marginBottom: 5
  },
  description: {
    fontSize: "0.875em",
    fontWeight: "300"
  }
}));

function RadioBox(props) {
  const classes = useStyles();
  const { checked, handleChange, name, value, heading, description } = props;

  const containerClick = e => {
    e.preventDefault();

    if(handleChange) {
      handleChange(name, value);
    }
  };

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <Radio
              checked={checked}
              onChange={containerClick}
              value={value}
              name={name}
              inputProps={{ "aria-label": "A" }}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Typography
                gutterBottom={true}
                variant="h5"
                className={classes.heading}
              >
                {heading || ""}
              </Typography>
              <Typography
                gutterBottom={true}
                variant="body1"
                className={classes.description}
              >
                {description || ""}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default RadioBox;
