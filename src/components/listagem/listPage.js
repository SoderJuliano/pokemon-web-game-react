import { Card } from "./card"
import React from "react"

const Page = () =>{

    const page = {
        backgroundColor: "#1c6373",
        background: "cover",
        with: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0"
    }
    const topDiv = {
        display: "flex",
    }
    return(
        <div style={page}>
            <div style={topDiv}>
            <Card />
            <Card />
            <Card />
            </div>
        </div>
    )
}
export {Page}