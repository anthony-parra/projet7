import React, { Fragment } from 'react'

const Inscription = () => {

    return(
        <Fragment>
            <div className='bloc_inscription'>
                                  <h2>Inscription</h2>

                                      <form className='inscription' method='POST' action='accueil.html'> 
                                      
                                          <label htmlFor='email'>Votre adresse mail </label>
                                          <input type='email' name='email' id='email' required size='100px' placeholder='prénom.nom@groupomania.com'></input>
                                          <p><strong>Veuillez entrer l'adresse mail utilisé dans le cadre de vos fonctions.</strong></p>
                                          
                                          <label htmlFor='password'>Votre mot de passe</label>
                                          <input type='password' name='password' id='password' required minLength='5' maxLength='15'></input>

                                          <input className='inscription_validation' type='submit' value='Inscription'></input>

                                      </form>
                          
            </div>                  
        </Fragment>
    )
}

export default Inscription
