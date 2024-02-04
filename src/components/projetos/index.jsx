import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

export default function projetos() {
    const [repos, setRepos] = useState([]);
    useEffect(() => {

        async function getRepos() {
            try {
                const response = await axios.get('https://api.github.com/users/gustavosilvabr/repos');
                console.log(response.data);
                setRepos(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getRepos();
    }, []);

    return (
        <div className='container'>
            <h1 className='title-projeto'>Projetos</h1>
            <div className='container-projetos'>
                {
                    repos.map((e,index)=>(
                        <div className='child' key={index}>
                            
                            <h1>{e.name}</h1>
                            <span>{e.description}</span>
                            <div className='button'>
                                <button>Codigo</button>
                                <button>Site</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}