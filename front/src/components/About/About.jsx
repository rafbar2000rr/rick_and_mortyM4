import style from './About.module.css'
export default function About (){

    return(
        <div>
            <div className={style.container}>
                
                <div className={style.info}>
                    <p>
                        Este proyecto tiene como finalidad crear una aplicación completa que sirva como base para tener una idea global y así poder desarrollar el proyecto individual.    
                    </p>
                </div>
                <div className={style.creador}>
                    
                    <img src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2861424%2F&psig=AOvVaw3fmGm21pLoYYVxvO9mEyci&ust=1677083812600000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjjj5mGp_0CFQAAAAAdAAAAABAE" alt ="" />
                </div>
            </div>
        </div>
    )
}