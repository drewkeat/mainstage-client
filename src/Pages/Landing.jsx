import {useState} from 'react'

function Landing() {
  
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
  })

  const styles = {
    display: "block",
    margin: "auto",
    marginTop: ".25rem"
  }

  const handleChange = (e) => {
    setformValues({
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <form>
        <input name="email" type="text" placeholder='email' style={styles} onChange={handleChange}/>
        <input name="password" type="password" placeholder='password' style={styles} onChange={handleChange}/>
        <input type="submit" value="Log In"  style={styles}/>
        <input type="button" value="Create Account"  style={styles}/>
      </form>
    </div>
  )
}

export default Landing