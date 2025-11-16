import { useState } from "react"
import { useAuthContext} from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css"

export const Login = () => {
    const [userForm, setUserForm] = useState({name: "", password: ""});
    const {user, login} = useAuthContext();

    const navigate = useNavigate()

    if(user){
        return <Navigate to="/admin/productos" />
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserForm({...userForm, [name]:value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(userForm.name, userForm.password);

        if(success){
            navigate("/admin/productos")
        }else{
            alert("Las credenciales son incorrectas! NO PASARAS!");
            setUserForm({name: "", password: ""})
        }
};

    return (
    <div className="login-page-container"> 
        <form onSubmit={handleSubmit} className="login-form"> 
            <h2 className="form-title">Iniciar Sesión</h2>
            <h3 className="form-subtitle">Administrador</h3>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Usuario:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={userForm.name} 
                    onChange={handleChange} 
                    className="form-input" 
                /> 
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={userForm.password} 
                    onChange={handleChange} 
                    className="form-input" 
                /> 
            </div>
            <button type="submit" className="submit-button">Inciar sesión</button>
        </form>
    </div>
    );
}