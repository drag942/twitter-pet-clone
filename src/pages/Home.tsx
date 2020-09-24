import React from 'react';
import {
    Container, FormControl,
    Grid, IconButton,
    Input, InputAdornment,
    Paper, Typography,
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MassageIcon from '@material-ui/icons/MailOutline';
import MarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PersonOutline';
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";
import Tweet from "../Components/Tweet";



export const useHomeStyles = makeStyles(() => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 36,
    },

    slideMenuList: {
        listStyle: 'none',
        margin:0,
        padding: 0,
    },
    slideMenuListItem: {
        display: 'flex',
        alignItems: 'center'
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },

    searchInput: {
        margin: '10px 0'
    },

    tweetsWrapper: {
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },

    tweetsHeader: {
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        }
    },

    tweet: {
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },


    tweetsUserName: {
        color: grey[500]
    },

    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        width: 450,
    },




}));


const Home:React.FC = ():React.ReactElement => {

    const classes = useHomeStyles();

    return (
        <Container>
            <Grid className={classes.wrapper} container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.slideMenuList}>
                        <li><IconButton className={classes.logo}><TwitterIcon className={classes.logoIcon} color={'primary'}/></IconButton></li>
                        <li className={classes.slideMenuListItem}>
                            <IconButton><SearchIcon className={classes.sideMenuListItemIcon}/></IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Поиск</Typography>
                        </li>
                        <li className={classes.slideMenuListItem}>
                            <IconButton><NotificationIcon className={classes.sideMenuListItemIcon}/></IconButton>
                            <Typography className={classes.sideMenuListItemLabel}  variant={'h6'}>Оповещения</Typography>
                        </li>
                        <li className={classes.slideMenuListItem}>
                            <IconButton><MassageIcon className={classes.sideMenuListItemIcon}/></IconButton>
                            <Typography className={classes.sideMenuListItemLabel}  variant={'h6'}>Сообщения</Typography>
                        </li>
                        <li className={classes.slideMenuListItem}>
                            <IconButton><MarkIcon className={classes.sideMenuListItemIcon}/></IconButton>
                            <Typography className={classes.sideMenuListItemLabel}  variant={'h6'}>Закладки</Typography>
                        </li>
                        <li className={classes.slideMenuListItem}>
                            <IconButton><ListIcon className={classes.sideMenuListItemIcon}/></IconButton>
                            <Typography className={classes.sideMenuListItemLabel}  variant={'h6'}>Список</Typography>
                        </li>
                        <li className={classes.slideMenuListItem}>
                            <IconButton><UserIcon className={classes.sideMenuListItemIcon}/></IconButton>
                            <Typography className={classes.sideMenuListItemLabel}  variant={'h6'}>Пользователи</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                        <Paper className={classes.tweetsHeader} variant={'outlined'}>
                            <Typography variant={'h6'}>Главная</Typography>
                        </Paper>
                        <Tweet
                            text={'Привет! Как дела?'}
                            classes={classes}
                            user={{
                                fullname: 'Дмитрий',
                                username: 'Dimon',
                                avatarUrl: '',
                            }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <FormControl>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            placeholder={'Поиск в твиттере'}
                            fullWidth
                            className={classes.searchInput}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;