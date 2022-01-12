import React, { useState } from "react"
import { useAppState } from "../AppState"
import { Route, Link } from "react-router-dom"
import Form from "../components/Form"
import Modal from "react-modal"

const Dashboard = (props) => {

    const {state, dispatch} = useAppState()
    const {token, url, manages, username} = state

    const getManages = async() => {
        const response = await fetch(url + "/manages/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const fetchedManages = await (await response).json()
        dispatch({type: "getManages", payload: fetchedManages})
    }

    React.useEffect(() => {getManages()}, [])

   

const loaded = () => {

   
    
    console.log(state)

    return(
    <div className = "dashboard">
       
    <h2>
        {username}'s Manages
    </h2>
    <Link to="/dashboard/new">
        <button>
            New Manage
        </button>
    </Link>
    <Route path="/dashboard/:action" render={(rp)=> <Form {...rp} getManages={getManages}/>}/>
    <ul>
    {state.manages.map(manage => (
        <div className = "manage" key={manage.id}>
            <h2>
                {manage.title}
            </h2>
            <h4>
                {manage.description}
            </h4>
            <h4>
                {manage.date}
            </h4>
         
        <button onClick={()=>{
        dispatch({type: "select", payload: manage})
        props.history.push("/dashboard/edit")
        }}>
            Edit Manage
        </button>

        <button onClick={()=>{
            fetch(url + "/manages/" + manage.id, {
                method: "delete",
                headers: {
                    Authorization: "bearer " + token
                }
            })
            .then(() => getManages())
        }}>
            Delete
        </button>

        </div>
    ))}
    </ul>
    
    </div>
)}

    return manages ? loaded() : <h1>LOADING...</h1>
}

export default Dashboard 