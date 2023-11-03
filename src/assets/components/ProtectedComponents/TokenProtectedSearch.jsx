import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { setIsEmail, setIsUsername } from "../../../redux/reducers/meUser/authMe";

function TokenProtectedSearch({ children }) {
  const navigate = useNavigate();
  const Data = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { title } = useParams()


  useEffect(() => {
    if (Data.token === undefined) {
        navigate("/")
        dispatch(setIsUsername(""))
        dispatch(setIsEmail(""))
    }
    else {
      navigate(`/search/${title}`)
    }
  }, [Data.token, navigate, dispatch, title]);



  return children;
}

export default TokenProtectedSearch;