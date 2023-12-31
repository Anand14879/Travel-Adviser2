// import { AutoComplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import  SearchIcon  from "@material-ui/icons/Search";

import useStyles from "./Styles";


const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box  style={{display:"flex"}}>
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    {/* <AutoComplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    {/* </AutoComplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
