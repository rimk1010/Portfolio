import React from 'react';
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';

const skills = [
    {
        name:'HTML',
        img:'html-5.svg',
        value:5,
    },
    {
        name:'CSS',
        img:'css-3.svg',
        value:4,
    },
    {
        name:'JavaScript',
        img:'javascript.svg',
        value:3,
    },
    {
        name:'REACT',
        img:'react.svg',
        value:3,
    },
    {
        name:'AWS',
        img:'aws.svg',
        value:3,
    },
]

function SkillsPage() {
    return (
        <div className='content'>
            <div className='page-text'>
                <h1 className='page-title'>SKILLS</h1>
                <div className='page-subtitle'>
                    <p>スキルページです。</p>
                    <p>できることと熟練度をまとめています。</p>
                </div>
                <div className='skills'>
                    {
                        skills.map((skill) => {
                            return (
                            <div className='skills-container'>
                                <h3>{skill.name}</h3>
                                <img width='150' height='150' src={`${process.env.PUBLIC_URL}/img/${skill.img}`} />
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating size='large' name="read-only" value={skill.value} readOnly />
                                </Box>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;