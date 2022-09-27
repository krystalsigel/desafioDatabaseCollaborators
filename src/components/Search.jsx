import React from 'react'

const Search = ({setSearching}) => {
    const pickOnChangeSearching = (event) => {
        setSearching(event.target.value);
    }   
  return (
    <nav className='navbar navbar-light mb-4 p-3 bg-dark text-light'>
        <span className='navbard-brand'>Buscar colaboradores</span>
        <input type="text" 
               placeholder='Busca un colaborador' 
               onChange={pickOnChangeSearching}
            //    list='datalistOptions'
        />
        {/* <datalist id='detailsOf'>
            <option value='Colaborador 1'/>
            <option value='Colaborador 2'/>
            <option value='Colaborador 3'/>
        </datalist> */}
    </nav>
  )
}

export default Search

//     const [searching, setSearching] = useState("");
//     // filtrar
// const filterList = (searchFilter) => {
//     const nuevaFiltrada = [...colaboradores]

    // colaboradores.filter(colaborador =>
    //     colaborador
    //     .toLowerCase()
    //     .includes(searchFilter)
    //     )};
    //     // onChange busqueda
    // const pickOnChangeSearching = (event) => {
    //      setSearching(event.target.value);
    //      filterList(event.target.value);