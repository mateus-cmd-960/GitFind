


import Header from "../../components/Header/Index"
import './style.css'
import Mateus from '../../assets/Mateus.jpg'
import ItemList from "../../components/ItemList/Index"
import { useState } from "react"


const App = ()=>{

    const [user, setUser]= useState('');
    const [currentuser, setcurrentUser]= useState(null);
    const [repo, setRepo]=useState(null);

    const handleGetData = async ()=>{
        const userData= await fetch(`https://api.github.com/users/${user}`);
        const newUser= await userData.json();

        if(newUser.name){
            const {avatar_url, name, bio}=newUser;
            setcurrentUser({avatar_url, name, bio});

            const repoData= await fetch(`https://api.github.com/users/${user}/repos`);
            const newRepo= await repoData.json();
            if(newRepo.length){
                setRepo(newRepo);
            }
        }
    }
    return(
        <div>
            <Header/>
            <div className="conteudo">
                <div className="info">
                    <div>
                        <input value={user} onChange={event=>setUser(event.target.value)}
                         name="usuario" placeholder="@usuario"/>
                         <button onClick={handleGetData}>Buscar</button>
                    </div>

                    {currentuser?.name ?(<>
                        <div className="perfil">
                        <img src={currentuser.avatar_url}  className='profile' alt="perfil" />
                    <div>
                        <h3>{currentuser.name}</h3>
                        <span>@Mateusdev</span>
                        <p>{currentuser.bio}</p>
                    </div>
                    
                </div>
                    <hr/>
                    </>):null}

                    {repo?.length ?(
                        <div>
                        <h4 className="repositorio">Repositorios</h4>
                        {repo.map(repo=>(
                            <ItemList title={repo.name}  descricao={repo.description}/>
                        ))}
                        
                       
                    </div>
                    ):null}

                
                    
                </div>
                
            </div>
        </div>
    )
    
    
}

export default App
