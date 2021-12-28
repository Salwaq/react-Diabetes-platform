import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import diabetesContext from "./utils/diabetesContext"
import PaitentProfile from "./pages/PaitentProfile"
import Doctor from "./pages/Doctor"
import LoginDr from "./pages/LoginDr"
import LoginPaitent from "./pages/LoginPaitent"
import Home from "./pages/Home"

function App() {
  const [profile, setProfile] = useState("")
  const [profileDr, setProfileDr] = useState(null)
  const navigate = useNavigate()

  const getProfilePaitent = async () => {
    const response = await axios.get("http://localhost:8000/api/paitent/profile", {
      headers: {
        Authorization: localStorage.tokenDiabetes,
      },
    })
    setProfile(response.data)
    console.log(response.data)
  }

  const getProfileDr = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/doctors/profile", {
        headers: {
          Authorization: localStorage.tokenDiabetes,
        },
      })
      setProfileDr(response.data)
      console.log(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  useEffect(() => {
    getProfilePaitent()
    getProfileDr()
  }, [])

  const loginPaitent = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const paitentBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:8000/api/paitent/login", paitentBody)
      localStorage.tokenDiabetes = response.data
      toast.success("login success")
      getProfilePaitent()
      navigate("/paitentProfile")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const loginDr = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const drBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:8000/api/doctors/login-doctor", drBody)
      localStorage.tokenDiabetes = response.data
      toast.success("login success")
      getProfileDr()
      navigate("/Doctor")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addQuestion = async (e, doctorId) => {
    e.preventDefault()
    try {
      const form = e.target
      const questionBody = {
        question: form.elements.question.value,
      }
      await axios.post(`http://localhost:8000/api/paitent/${doctorId}/questions`, questionBody, {
        headers: {
          Authorization: localStorage.tokenDiabetes,
        },
      })
      toast.success("add Q success")
      getProfilePaitent()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = async () => {
    localStorage.removeItem("tokenDiabetes")
    console.log("logout success")
  }

  const store = {
    loginPaitent,
    loginDr,
    profile,
    addQuestion,
    profileDr,
    logout,
  }

  return (
    <diabetesContext.Provider value={store}>
      <ToastContainer />
      <Home />

      <Routes>
        <Route path="/paitentProfile" element={<PaitentProfile />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/loginDr" element={<LoginDr />}></Route>
        <Route path="/loginPaitent" element={<LoginPaitent />}></Route>
      </Routes>
    </diabetesContext.Provider>
  )
}

export default App
