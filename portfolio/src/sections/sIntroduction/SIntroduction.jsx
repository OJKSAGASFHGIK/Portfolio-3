import me from './../../assets/img/me3.jpg';

import React, { useState } from 'react';

function SIntroduction({theme = "sTheme"}){
    const [a1Copied, a1SetCopied] = useState(false);
    const f1CopyEmail = () => {
        const fa1Email = document.getElementById('id1Show-Email').innerText;
        navigator.clipboard.writeText(fa1Email).then(() => {
            a1SetCopied(true);
            setTimeout(() => a1SetCopied(false), 2187);
        })
    }

    return(
        <>
            <section className={`container-fluid ${theme} Introduction`}>
                <div className="row">
                    <div className="col-6">
                        <h2>Marcus Guilherme Souza Campos</h2>
                        <div className="d-none d-sm-block">
                            <p><span className="borderUwU">Desenvolvedor Front-End</span><br/>
                            <span>Novembro 2022 - Presente</span></p>
                                • Redes e contato:<br/>
                                <a href="https://github.com/OJKSAGASFHGIK" target="_blank">Git</a> - <a href="https://www.linkedin.com/in/marcus-guilherme-sc3/" target="_blank">Linkedin</a><br/>
                                <a id='id1Show-Email' onClick={f1CopyEmail} style={{cursor: "pointer"}}>mgsouzacampos@hotmail.com</a> {a1Copied && <span > - E-mail copiado</span>}<br/>
                                <a href="https://wa.me/5521980636091" target="_blank">+55 (21) 98063-6091</a><br/>

                                • Cursando Ensino Superior em:<br/>
                                Análise e Desenvolvimento de Sistemas<br/>
                                4¹ período / Agosto 2023 - Dezembro 2025<br/>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={me} alt="me" className="float-end me-md-3"/>
                    </div>
                </div>
                <div className="d-block d-sm-none">
                    <div>
                        <p><span className="borderUwU">Desenvolvedor Front-End</span><br/>
                        <span>Novembro 2022 - Presente</span></p>
                            • Redes e contato:<br/>
                            Git - Linkedin - Indeed<br/>
                            mgsouzacampos@hotmail.com<br/>
                            +55 (21) 98063-6091<br/>

                            • Cursando Ensino Superior em:<br/>
                            Análise e Desenvolvimento de Sistemas<br/>
                            3¹ período / Agosto 2023 - Dezembro 2025<br/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SIntroduction;