import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCel, setCel } from '../reducers/slices/celSlices';



const Celebrities_List = ({ celebrities }) => {
    const dispatch = useDispatch();
    const {celebrities_List} = useSelector (state => state.cel)
function handleAdd (celid){
    const celebrity = celebrities.find(c => c.birthday === celid);
   if (celebrities_List.find(c => c.birthday === celid)){
    dispatch(removeCel(celid));
   } else {
       dispatch(setCel(celebrity));
   } 
   console.log(celebrity);
}



return (
    <div >
        <div className="card"> Celebrities_List </div>
        <div> {celebrities.map(c => {
            return (
                <div className="card-body">
                    <h4 className="card-title">{c.name}</h4>
                    <h2 className="card-title">{c.age}</h2>
                   <div> {c.occupation} </div>
                   <button class="btn btn-primary" type="button" onClick={()=> handleAdd (c.birthday)}> Agregar a Celebridades Favoritas </button>
                </div>)
        }

        )}
        </div>
    </div>)
}

export default Celebrities_List
