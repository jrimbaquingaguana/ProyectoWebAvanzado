import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para manejar el inicio de sesión utilizando this.state.email y this.state.password
    }

    render() {
        const backgroundStyle = {
            backgroundImage: 'url("imagen.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        };

        return (
            <div style={backgroundStyle} className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                <div className="bg-white p-3 rounded w-25">
                    <form onSubmit={this.handleSubmit}>
                        <div className='mb-3'>
                        <p>Bienvenido a EasyClass</p>

                            <label htmlFor="email"><strong>Email</strong></label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Ingresar Email"
                                className='form-control rounded-0'
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password"><strong>Contraseña</strong></label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Ingresa la contraseña'
                                className='form-control rounded-0'
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button className='btn btn-success w-100' type="submit">Iniciar sesión</button>
                        <p>Políticas y condiciones</p>
                        <button className='btn btn-default border w-100 bg-light'>Crear cuenta</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
