import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import { types } from "../../store/types/userTypes";
import TextField from "@mui/material/TextField";

const PrivatePageUser = () => {
  const [openMadaleEditUser, setOpenMadaleEditUser] = useState(false);
  const dispatche = useDispatch();
  const navigate = useNavigate();
  const { fullName, phone, photo, adress, store, bid, benefits, email } =
    useSelector((state) => state.auth.profilePage);
  const [file, setFile] = useState("");

  const editProfile = async (e) => {
    e.preventDefault();
    dispatche({
      type: types.INFO_USER_PAGE_EDIT_SAGA,
      userInfo: {
        fullName: e.target.form[1].value,
        phone: e.target.form[5].value,
        photo: e.target.form[0].files[0],
        adress: e.target.form[3].value,
      },
    });
  };
  const handleOpen = () => setOpenMadaleEditUser(true);
  const handleClose = () => setOpenMadaleEditUser(false);

  useEffect(() => dispatche({ type: types.CHECK_IS_AUTH_SAGA }), []);

  return (
    <>
      <div style={{ width: "100%", height: "90vh", display: "flex" }}>
        <div style={{ width: "40%", height: "100%", margin: "0" }}>
          <div>
            <img
              style={{ maxWidth: "80%", marginTop: "2%" }}
              src={photo}
              alt="Не удалось загрузить фото с сервера."
            />
            <div>
              <b>Информация:</b>
            </div>
            <ul style={{ justifyContent: "start" }}>
              <li style={{}}>ФИО: {fullName}</li>
              <li>Адрес: {adress}</li>
              <li>Телефон: {phone}</li>
              <li>email: {email}</li>
            </ul>
            {true ? (
              <Button onClick={() => handleOpen()}>Редактировать</Button>
            ) : null}
          </div>
        </div>
        <div style={{ width: "60%", height: "100%", margin: "0" }}>
          <div
            style={{
              width: "100%",
              height: "20%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div style={{ height: "15%", marginRight: "3%", marginLeft: "3%" }}>
              {" "}
              <b>Мои обращения:</b>{" "}
            </div>
            {bid?.map((el) => (
              <div
                key={el.id}
                style={{
                  border: "1px solid blue",
                  borderRadius: "3%",
                  height: "15%",
                  marginRight: "3%",
                  marginLeft: "3%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>{el.title}</div>
                <div>{el.status}</div>
              </div>
            ))}
          </div>
          <div style={{ width: "100%", height: "20%", margin: "0" }}>
            <div style={{ height: "15%", margin: "0" }}>
              {" "}
              <b>Мои услуги</b>{" "}
            </div>
            <div
              style={{
                height: "83%",
                margin: "0",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {benefits?.map((el, ind) => {
                if (ind < 4) {
                  return (
                    <div
                      key={el.id}
                      style={{
                        border: "1px solid blue",
                        borderRadius: "3%",
                        width: "20%",
                        height: "100%",
                        margin: "0",
                      }}
                      onClick={() => navigate(`/service/${el.id}`)}
                    >
                      <img
                        style={{ maxHeight: "30%", marginTop: "2%" }}
                        src={el.link}
                        alt=""
                      />

                      <div>
                        <b>{el.title}</b>
                      </div>
                      <div>Описание: {el.text}</div>
                      <div>Цена: {el.price}</div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div style={{ width: "100%", height: "20%", margin: "0" }}>
            <div style={{ height: "15%", margin: "0" }}>
              {" "}
              <b>Мои товары на барахолке</b>{" "}
            </div>
            <div
              style={{
                height: "83%",
                margin: "0",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {store?.map((el) => (
                <div
                  key={el.id}
                  style={{
                    border: "1px solid blue",
                    borderRadius: "3%",
                    width: "20%",
                    height: "100%",
                    margin: "0",
                  }}
                  onClick={() => navigate(`/product/${el.id}`)}
                >
                  <div
                    style={{ height: "60%", width: "100%", marginTop: "2%" }}
                  >
                    <img style={{ maxHeight: "100%" }} src={el.status} alt="" />
                  </div>
                  <div>
                    <b>{el.title}</b>
                  </div>
                  <div>{el.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {true ? (
        <div>
          <Modal
            open={openMadaleEditUser}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <h2 id="parent-modal-title"> Редактирование профиля:</h2>
              <form method="post">
                <label
                  style={{ display: "flex", flexDirection: "column" }}
                  htmlFor="icon-button-file"
                >
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                  <Box component="span">Ваше фото</Box>
                  <input
                    onChange={(e) => setFile(e.target.files)}
                    style={{ display: "none" }}
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    multiple
                  />
                  <TextField
                    type="text"
                    placeholder="Введите ваше ФИО"
                    defaultValue={fullName}
                    required
                  />
                  <TextField
                    type="text"
                    placeholder="Введите ваш адрес"
                    defaultValue={adress}
                    required
                  />
                  <TextField
                    type="text"
                    placeholder="Введите ваш телефон"
                    defaultValue={phone}
                    required
                  />
                </label>
                <input
                  type="submit"
                  value="Редактировать"
                  onClick={(e) => {
                    editProfile(e);
                    handleClose();
                  }}
                  name="submit"
                />
              </form>
            </Box>
          </Modal>
        </div>
      ) : null}
    </>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderColor: "blue",
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 12,
};

export default PrivatePageUser;
