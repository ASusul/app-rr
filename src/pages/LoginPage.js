import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <label htmlFor="">Pogdaj login
            <input type="text" /></label>

            <label htmlFor="">Pogdaj hasło
            <input type="pass" /></label>
            <button>Zalogouj</button>
        </div>
    );
}

export default LoginPage;