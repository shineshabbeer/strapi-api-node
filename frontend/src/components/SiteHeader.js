import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteHeader() {
    return (
        <div>
            <Link to="/"><h1>Code Reviews</h1></Link>
        </div>
    )
}