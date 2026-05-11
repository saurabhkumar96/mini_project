import React from 'react'

const Index = () => {
    return (
        <div className='flex justify-center border-2 '>
            <div className='flex flex-col gap-2'>
                <h3>Skill Path</h3>
                <h1 className='font-bold text-4xl'>Create a Front-End App with React</h1>
                <p>Learn to build front-end web apps with JavaScript and React.</p>
                <p>Includes <span className='font-bold'> JavaScript, React, HTTP, Web Apps, Front-End Development, Web Framework,</span> and more.</p>
                <p>To start this Skill Path, upgrade your plan.</p>
                <div className='flex gap-5'>
                    <button className='bg-[#3A10E5] h-10 w-60 rounded-sm text-white font-bold'>start</button>
                    <div className='flex '>
                        <div className='rounded-[100%] border-2 border-black border-solid w-9 h-9'></div>
                        <div className='rounded-[100%] border-2 border-black border-solid w-9 h-9'></div>
                        <div className='rounded-[100%] border-2 border-black border-solid w-9 h-9'></div>
                        <p><span className='font-bold'>54,577</span> learners enrolled</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col border-2 border-black border-solid p-9'>
                    <h2>This skill path includes</h2>
                    <a href="">AI assistance for guided coding help</a>
                    <hr />
                    <a href="">Projects to apply new skills</a>
                    <hr />
                    <a href="">Quizzes to test your knowledge</a>
                    <hr />
                    <a href="A certificate of completion"></a>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Index