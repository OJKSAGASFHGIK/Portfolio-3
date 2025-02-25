function SProjects({theme="sTheme", myId="idProjects"}){
    return(
        <>
            <section id={myId} className={`container-fluid ${theme} sProjects`}>
                <div>
                    <div>
                        <h3>Projetos:</h3>
                        <p className='small'><strong>Obs: Acesse link de projetos por um desktop</strong> <br/><emphasis>Tópicos voltados para utilidade e didática</emphasis></p>
                    </div>
                    <div className='row row-cols-md-3 row-cols-2'>
                        <div>
                            <article>
                                <h4>All Notes</h4>
                                <p>Notas gerais sobre HTML, CSS e JavaScript<br/></p>
                                <a href="./projects/1.ProjectNotes/1.HTMLandCSSnotes/a1ResumeAll.html" target="_blank">Clique aqui para ver
                                    mais...</a>
                            </article>
                        </div>
                        <div>
                            <article>
                                <h4>React.JS <br/>Project</h4>
                                <p>Notas gerais sobre React.JS</p>
                                <a href="./projects/1.ProjectNotes/3.LearningReactJS/react-library/public/index.html" target="_blank">Clique
                                    aqui para ver
                                    mais...</a>
                            </article>
                        </div>
                        <div>
                            <article>
                                <h4>Bootstrap <br/>Project</h4>
                                <p>Notas gerais sobre bootstrap</p>
                                <a href="./projects/1.ProjectNotes/4.LearningBootstrap/index.html" target="_blank">Clique
                                    aqui para ver mais...</a>
                            </article>
                        </div>
                        {/*
                        <div>
                            <article>
                                <h4>a1</h4>
                                <p>Bolo de cenoura</p>
                                <a href="./../../../../a1BoloDeCenoura.html" target="_blank">Clique
                                    aqui para ver mais...</a>
                            </article>
                        </div>
                        */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default SProjects