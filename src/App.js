import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import diabetesContext from "./utils/diabetesContext"
import PaitentProfile from "./pages/PaitentProfile"
import Doctor from "./pages/Doctor"
import Home from "./pages/Home"
import Style from "./Style.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [profile, setProfile] = useState("")
  const [profileDr, setProfileDr] = useState(null)
  const [articals, setArticals] = useState([])
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

  const getArticals = async () => {
    const response = await axios.get("http://localhost:8000/api/article", {
      headers: {
        Authorization: localStorage.tokenDiabetes,
      },
    })
    setArticals(response.data)
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
      console.log(error)
    }
  }
  useEffect(() => {
    if (localStorage.tokenDiabetes) {
      getArticals()
      getProfilePaitent()
      getProfileDr()
    }
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
      console.log(error)
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

  const addInfo = async (e, paitentId) => {
    e.preventDefault()
    try {
      const form = e.target
      const infoBody = {
        bloodType: form.elements.bloodType.value,
        weight: form.elements.weight.value,
        height: form.elements.height.value,
        diabetesType: form.elements.diabetesType.value,
      }
      await axios.post(`http://localhost:8000/api/paitent/${paitentId}/info`, infoBody, {
        headers: {
          Authorization: localStorage.tokenDiabetes,
        },
      })
      toast.success("add information from paitent success")
      getProfileDr()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addCd = async (e, paitentId) => {
    e.preventDefault()
    try {
      const form = e.target
      const cdBody = {
        cumulativeDiabetes: form.elements.cumulativeDiabetes.value,
      }
      await axios.post(`http://localhost:8000/api/paitent/${paitentId}/info/cd`, cdBody, {
        headers: {
          Authorization: localStorage.tokenDiabetes,
        },
      })
      toast.success("add cumulative Diabetes from paitent success")
      getProfileDr()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addVisit = async (e, idPaitent) => {
    e.preventDefault()
    try {
      const form = e.target
      const visitBody = {
        date: form.elements.date.value,
      }
      await axios.post(`http://localhost:8000/api/doctors/${idPaitent}/visit`, visitBody, {
        headers: {
          Authorization: localStorage.tokenDiabetes,
        },
      })
      toast.success("add visit success")
      getProfileDr()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addAnswer = async (e, questionId) => {
    e.preventDefault()
    try {
      const form = e.target
      const questionBody = {
        answer: form.elements.answer.value,
      }
      await axios.post(`http://localhost:8000/api/doctors/${questionId}`, questionBody, {
        headers: {
          Authorization: localStorage.tokenDiabetes,
        },
      })
      toast.success("add Answer success")
      getProfileDr()
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
    addVisit,
    addAnswer,
    addInfo,
    addCd,
    articals,
  }

  return (
    <diabetesContext.Provider value={store}>
      <ToastContainer />
      <Navbar />
      <Home />
      <Routes>
        <Route path="/paitentProfile" element={<PaitentProfile />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
      <Footer />
    </diabetesContext.Provider>
  )
}

export default App
