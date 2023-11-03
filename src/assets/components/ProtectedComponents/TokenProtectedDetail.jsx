import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { setIsEmail, setIsUsername } from "../../../redux/reducers/meUser/authMe";

function TokenProtectedDetail({ children }) {
  const navigate = useNavigate();
  const Data = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { id } = useParams()


  useEffect(() => {
    if (Data.token === undefined) {
        navigate("/")
        dispatch(setIsUsername(""))
        dispatch(setIsEmail(""))
    }
    else {
      navigate(`/${id}`)
    }
  }, [Data.token, navigate, dispatch, id]);



  return children;
}

export default TokenProtectedDetail;