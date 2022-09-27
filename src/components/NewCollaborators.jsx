import React from "react";

const NewCollaboratorsList = ({colaboradores}) => {
    return (
        <div className="bg-secondary text-light">
            <ul>
                {colaboradores.map((colaborador) => (
                    <li key={colaborador.id.toString()}>
                        {colaborador.nombre.toLowerCase()} - {colaborador.correo}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default NewCollaboratorsList;
