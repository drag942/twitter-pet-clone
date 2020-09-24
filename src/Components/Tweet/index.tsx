import React from 'react';
import {useHomeStyles} from "../../pages/Home";
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";

interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
    
}

const Tweet:React.FC<TweetProps> = ({classes, children, user, text}): React.ReactElement => {
    return (

            <Paper variant={'outlined'} className={classNames(classes.tweetsHeader, classes.tweet)}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar src={user.avatarUrl}/>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography>
                            <b>{user.fullname}</b> <span className={classes.tweetsUserName}>@{user.username}</span>
                        </Typography>
                        <Typography variant={'body1'} gutterBottom>
                            {text}
                        </Typography>
                        <div className={classes.tweetFooter}>
                            <div>
                                <IconButton>
                                    <CommentIcon style={{ fontSize: 20 }} />
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <RepostIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <LikeIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <ShareIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
    );
};

export default Tweet;