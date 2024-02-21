import React, { useState } from 'react';
import '../css/estiloIndex.css';

function Navbar() {
    const [videos, setVideos] = useState([
        { titulo: "Video 1", descripcion: "Curso desarrollo FullStack usando Django y React", url: "https://www.youtube.com/embed/6CUgF7cglT4?si=Uf8zrnHi9aqMZAgX" },
        { titulo: "Video 2", descripcion: "Aprende React de la manera mas facil", url: "https://www.youtube.com/embed/PWF5SgnNdp4?si=yqTuJuYlP4wyFYfD" },
        { titulo: "Video 3", descripcion: "Video 18 React", url: "https://www.youtube.com/embed/FZ0cG47msEk?si=9BW0CLaqOCC4EO_H" },
        { titulo: "Video 4", descripcion: "Aprende javascript desde 0", url: "https://www.youtube.com/embed/RqQ1d1qEWlE?si=7ShokLRD7TAdyA4h" }
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredVideos = videos.filter(video => {
        return video.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const mostrarListaVideos = (videosMostrados) => {
        return videosMostrados.map((video, index) => (
            <div className="row" key={index}>
                <div className="col">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe src={video.url} className="embed-responsive-item" allowFullScreen title={video.titulo}></iframe>
                    </div>
                </div>
                <div className="col">
                    <h4>{video.titulo}</h4>
                    <h6>{video.descripcion}</h6>
                </div>
                <div className="col">
                    <button className="btn btn-outline-primary">@</button>
                </div>
            </div>
        ));
    };
    
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src="../img/React_Banner.png" width="100%" height="100%" alt="" />
                    </a>
                </div>
            </nav>

            <div className='idContenedorIndex'>
                <header id="idEncabezadoIndex">
                    <h1 className='bg-dark text-white text-center'>Lista Videos</h1>
                </header>

                <nav className="mt-3">
                    <div className="input-group">
                        <span className="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </span>
                        <input className="form-control" type="search" name="txtBuscar" id="txtBuscar" placeholder="Buscar video por título" onChange={handleSearch} />
                    </div>
                </nav>

                <section className="mt-4">
                    <div id="listaVideosArreglo" className="container">
                        {mostrarListaVideos(filteredVideos)}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Navbar;
