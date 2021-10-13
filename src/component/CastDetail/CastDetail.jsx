import React, { useEffect, useState } from "react";
import Poster from "../Poster/Poster";
import "./CastDetail.scss";
function CastDetail({ cast, getId }) {
  const [person, setPerson] = useState({});
  const [credits, setCredits] = useState([]);
  const [images, setImage] = useState([]);
  useEffect(() => {
    const getCastInfor = async () => {
      const url = `https://api.themoviedb.org/3/person/${cast.castId}?api_key=5761f00d4efd80b92ba2496773204780&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      setPerson(data);
    };
    getCastInfor();
  }, [cast]);
  useEffect(() => {
    const getCredits = async () => {
      const url = `
      https://api.themoviedb.org/3/person/${cast.castId}/movie_credits?api_key=5761f00d4efd80b92ba2496773204780&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      setCredits(data.cast);
    };
    getCredits();
  }, [cast]);
  useEffect(() => {
    const getImage = async () => {
      const url = `
      https://api.themoviedb.org/3/person/${cast.castId}/images?api_key=5761f00d4efd80b92ba2496773204780&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      setImage(data.profiles);
    };
    getImage();
  }, [cast]);
  const imageCast = images.map((image,index) => {
    return (
      <div className="cast-img" key={index}>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${image.file_path}`}
          alt=""
        />
      </div>
    );
  });
  return (
    <div className="cast-setion">
      <div className="container">
        <div className="cast-details">
          <div className="column small">
            <img
              className="avatar"
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}
              alt=""
            />
            <h3>Thông tin cá nhân</h3>
            <dl>
              <dt>Nghề nghiệp</dt>
              <dd>Diễn viên</dd>
              <dt>Giới tính</dt>
              <dd>{person.gender === 1 ? "Nữ" : "Nam"}</dd>
              <dt>Ngày sinh</dt>
              <dd>{person.birthday}</dd>
              <dt>Nơi sinh</dt>
              <dd>{person.place_of_birth}</dd>
            </dl>
          </div>
          <div className="column main">
            <h1>{person.name}</h1>
            <h3>Tiểu sử</h3>
            <div className="bio">{person.biography}</div>
            <h3>Các phim đã tham gia</h3>
            <Poster
              type={"movie"}
              filmData={credits}
              number={20}
              getId={getId}
            />
            <h3>Hình ảnh</h3>
            <div className="cast-image-wrapper">{imageCast}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CastDetail;
