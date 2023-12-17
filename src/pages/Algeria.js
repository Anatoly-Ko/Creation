import './App.css';



export const Alg =() => {
  return (
    <>
    
      <body>
        <header>
        
        <nav>
            <h1>Созидание</h1>
            <section class="head_options">
            <a href="/home">HOME</a>
            </section>
            <button>Sign up</button>
        </nav>
        </header>
        <hr></hr>

        <section class="video">

            <div>
                <h2>Video</h2>
                Тут будет видео
            </div>

        </section>

        <section class="info">
            <h2>Information about contry</h2>

            <section class="services">

            <div id="our-services" class="our-services">
                <h3>Колонка 1</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div id="our-services" class="our-services"> 
                <h3>Колонка 2</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>


            </section>

        </section>

        <section class="slider">
        <h2>Vizualization</h2>

            <div>
                Слайдер
            </div>

        </section>

        <section class="useful_sources">
        <h2>Information</h2>
            <div>
                Ссылки на полезные ресурсы (как располагаются?)
            </div>

        </section>



    <footer>
        <nav>
            <a href="home">Home</a>
            {/* <p>© 2023 Your Website. All rights reserved.</p> */}
            <a href="russia">Russia</a>
        </nav>
    </footer>



      </body>



    </>
  );
}

export default Alg;