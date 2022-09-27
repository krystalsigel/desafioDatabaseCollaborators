import React, {useState} from 'react';

const Collaborator = ({colaboradores, setColaboradores}) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    //controladores de eventos
    const pickOnChangeNombre = (event) => setNombre(event.target.value);
    const pickOnChangeCorreo = (event) => setCorreo(event.target.value);
    const pickOnSubmit = (event) => {
        event.preventDefault();
        const nuevosColaboradores = {
            id: Date.now(),
            nombre: nombre,
            correo: correo
        }
        setColaboradores([...colaboradores, nuevosColaboradores]);
        setNombre('');
        setCorreo('');
    };

  return (
      <form className='mb-4 p-3 border border-2 border-info rounded'
       onSubmit={pickOnSubmit}>
          
          <div className='mb-2'>
              <label htmlFor='nombre'>Nombre del colaborador</label>
              <input 
              type="text" 
              className='form-control' 
              name='nombre' 
              placeholder='Nombre colaborador'
              onChange={pickOnChangeNombre}/>
          </div>
          <div className='mb-2'>
              <label htmlFor='correo'>Correo del colaborador</label>
              <input 
              type="email" 
              className='form-control' 
              name='correo' 
              placeholder='Correo colaborador'
              onChange={pickOnChangeCorreo}/>
          </div>
          <button type='submit' className='w-100 btn btn-primary'>Agregar</button>
      </form>

      
    
  );
};

export default Collaborator;