import "./PrivatePageChairman.scss";
import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  CardHeader,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { CardMedia } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { delSagaBid } from "../../store/actionCreators/bid";

export const BidsItem = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.bids);
  const auth = useSelector((state) => state.auth.auth);

  if (store.length === 0) {
    return (
      <div>
        <div style={{ paddingTop: "130px", paddingLeft: "80px" }}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  const delHandler = () => {
    dispatch(delSagaBid(Number(params.id)));
    navigate("/bids");
  };
  const bids = store.filter((el) => el.id === Number(params.id) && el);

  return (
    <>
      <Typography
        variant="h5"
        className="private-page-chairman-form__typography"
      >
        Подробнее о заявке
      </Typography>
      <Box className="private-page-chairman-item">
        {bids?.map((bid) => {
          return (
            <List key={bid.id} className="private-page-chairman-item__list">
              <CardHeader
                avatar={<Avatar src={bid["User.Userinfo.link"]} />}
                title={bid["User.Userinfo.full_name"]}
                subheader={dayjs(bid.createdAt).format("DD.MM.YYYY HH:MM")}
              />
              {bid.link && (
                <CardMedia
                  className="private-page-chairman-main__card"
                  component="img"
                  height="300"
                  image={bid.link}
                />
              )}
              <CardContent>
                <ListItem className="private-page-chairman-item__list">
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "flex", mb: "10px" }}
                          component="span"
                          variant="body1"
                          color="text.primary"
                        >
                          Описание заявки: {bid.text}
                        </Typography>
                        <Typography
                          sx={{ display: "flex", mb: "10px" }}
                          component="span"
                          variant="body1"
                          color="text.primary"
                        >
                          {" "}
                          Номер заявки: {bid.id}
                        </Typography>
                        <Typography
                          sx={{ display: "flex", mb: "10px" }}
                          component="span"
                          variant="body1"
                          color="text.primary"
                        >
                          Адрес: {bid.adress}
                        </Typography>
                        <Typography
                          sx={{ display: "flex", mb: "10px" }}
                          component="span"
                          variant="body1"
                          color="text.primary"
                        >
                          Телефон: {bid["User.Userinfo.phone"]}
                        </Typography>
                        <Typography
                          sx={{ display: "flex", mb: "10px" }}
                          component="span"
                          variant="body1"
                          color="text.primary"
                        >
                          Email : {bid["User.email"]}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </CardContent>
              <Box className="private-page-chairman-item__button" mt={4}>
                <Box className="private-page-chairman-item__button" mt={4}>
                  {auth.user_id && (
                    <Button variant="contained" onClick={delHandler}>
                      Удалить
                    </Button>
                  )}
                </Box>
              </Box>
            </List>
          );
        })}
      </Box>
    </>
  );
};
