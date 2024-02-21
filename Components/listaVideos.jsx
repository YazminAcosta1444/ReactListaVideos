import React from 'react';
import '../css/estiloIndex.css';

function ListaVideos() {
    var videos = [
        { titulo: "Video 1", descripcion: "Curso desarrollo FullStack usando Django y React", url: "https://www.youtube.com/embed/6CUgF7cglT4?si=Uf8zrnHi9aqMZAgX" },
        { titulo: "Video 2", descripcion: "Aprende React de la manera mas facil", url: "https://www.youtube.com/embed/PWF5SgnNdp4?si=yqTuJuYlP4wyFYfD" },
        { titulo: "Video 3", descripcion: "Video 18 React", url: "https://www.youtube.com/embed/FZ0cG47msEk?si=9BW0CLaqOCC4EO_H" },
        { titulo: "Video 4", descripcion: "Aprende javascript desde 0", url: "https://www.youtube.com/embed/RqQ1d1qEWlE?si=7ShokLRD7TAdyA4h" }
    ];

    const mostrarListaVideos = () => {
        return videos.map((video, index) => (
            <div className="row my-4" key={index}>
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
            {mostrarListaVideos()}
        </div>
    );
}

export default ListaVideos;
