import React from 'react';


function Skills(){
    return(
        <div>
            <div className='card'>
                <div className='card-content'>
                    <h6><strong>PROFESSIONAL SKILLS :</strong></h6>
                    <div className='row mt-top'>
                        <div className='mt-bottom'></div>
                        <div className='col s6'>
                            <p><strong>PYTHON</strong></p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue'style={{width:'90%'}}> </div>
                            </div>
                            <p><strong>C++</strong></p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue'style={{width:'85%'}}> </div>
                            </div>
                            <p><strong>HTML</strong></p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue'style={{width:'88%'}}> </div>
                            </div>
                            <p><strong>JAVA SCRIPT</strong></p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue'style={{width:'92%'}}> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Skills;