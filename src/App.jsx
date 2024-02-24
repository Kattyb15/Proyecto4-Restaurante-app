import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import db from './config/database';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentarios: ""
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }

  const reservar = async (event) => {
    event.preventDefault();
    console.log(formulario);
    try {
      await addDoc(collection(db, "reservas"), formulario);
      console.log("Reserva exitosa");
    } catch (error) {
      console.error("Error al realizar la reserva:", error);
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <h2>Entradas Blog</h2>
        <div className="row">
          {/* Aquí van las entradas del blog */}
        </div>
        <hr />
        <div className="row">
          <h2>Seccion de reservas</h2>
          <p>En esta seccion puedes reservar un lugar para ti y tus acompañantes.</p>
          <div className="col-md-6" style={{ backgroundColor: "#f1f1f1" }}>
            <h3>Reserva con nosotros</h3>
            <p>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</p>
            <p>Centro Histórico Estado de México, MX 12345</p>
            <p>+52 (551) 151-0579</p>
            <p>kattybdr15@gmail.com</p>
            <p>2021. UCamp. Todos los derechos reservados. Esta es una aplicación ficticia para fines académicos.</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={reservar}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="nombre" onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input type="text" className="form-control" name="telefono" onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje y comentarios</label>
                <textarea className="form-control" rows="5" name="comentarios" onChange={handleInputChange}></textarea>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <button className="btn btn-primary">Reservar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer titulo="Suscribete a nuestras noticias" />
    </>
  );
}

export default App;
