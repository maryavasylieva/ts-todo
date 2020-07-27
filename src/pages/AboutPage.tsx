import React from 'react';
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()

    return (
        <>
            <h1>Information page</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quisquam soluta. Sequi quisquam atque laudantium veniam, ducimus quos tempore accusamus.</p>

            <button className='btn' onClick={() => history.push('/')}>Back to do list</button>
        </>
    )
}
