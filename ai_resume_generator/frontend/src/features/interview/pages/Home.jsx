import React from 'react'

const Home = () => {
  return (
    <main>
        <div id='left'>
            <textarea name="jobDescription" id="jobDescription" placeholder='jobDescription'></textarea>
        </div>
        <div id='right'>
            <div className='input-group'>
                <label htmlFor="resume">upload resume</label>
                <input type="file" id='resume' name='resume' placeholder='upload resume' className='border-2' />
            </div>
            <div className='input-group'>
                <label htmlFor="selfDescription">self description</label>
                <textarea name="selfDescription" id="selfDescription"></textarea>
            </div>
            <button>Generate</button>
        </div>
    </main>
  )
}

export default Home