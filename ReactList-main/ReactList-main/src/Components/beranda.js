import React, {Component} from 'react';
import '../App.css'
import Media from "./Media"

class Beranda extends Component {
    render(){
        return(
            <div className='body'>
                <Media image="bumi.png" title="Bumi">
                Bumi adalah planet ketiga dari Matahari yang merupakan planet terpadat dan terbesar kelima dari delapan planet dalam Tata Surya. Bumi juga merupakan planet terbesar dari empat planet kebumian di Tata Surya. Bumi terkadang disebut dengan dunia atau Planet Biru.

Bumi terbentuk sekitar 4,54 miliar tahun yang lalu, dan kehidupan sudah muncul di permukaannya paling tidak sekitar 3,5 miliar tahun yang lalu.[23] Biosfer Bumi kemudian secara perlahan mengubah atmosfer dan kondisi fisik dasar lainnya, yang memungkinkan terjadinya perkembangbiakan organisme serta pembentukan lapisan ozon, yang bersama medan magnet Bumi menghalangi radiasi surya berbahaya dan mengizinkan makhluk hidup mikroskopis untuk berkembang biak dengan aman di daratan.[24] Sifat fisik, sejarah geologi, dan orbit Bumi memungkinkan kehidupan untuk bisa terus bertahan.
                </Media>

                <Media image="bintang.png" title="Bintang">
                Bintang merupakan benda langit yang memancarkan cahaya yang disebabkan oleh reaksi fusi nuklir yang menghasilkan energi yang terjadi di intinya.[1] Perlu diperhatikan bahwa 'bintang semu' bukanlah bintang, tetapi planet yang memantulkan cahaya dari bintang lain dan terlihat bercahaya di langit seperti sebuah bintang.

Menurut ilmu astronomi, definisi bintang adalah:
Semua benda masif (bermassa antara 0,08 hingga 200 massa matahari) yang sedang dan pernah melangsungkan pembangkitan energi melalui reaksi fusi nuklir.
                </Media>
            </div>
        )
        
    }
}

export default Beranda;