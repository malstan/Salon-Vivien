/**
 * Stanislav Malik
 * 2021
 * templates for home page, displaying dresses and contact page
 */

/**
 * home page
 * @returns {string} - html template for home page
 */
export const home = () => {
    return (`
    <article>
      <div class="text-center">

          <div class="img-1">
          <div style="background-color: rgba(255,255,255, 0.75); padding: 5em 0">
            <h1 class="citation">Keď sa sen stáva skutočnosťou...</h1>
            <!-- first texts -->
              <div class="d-flex justify-content-center mb-3 scroll-element js-scroll fade-left">
                <p>Šaty v ktorých zažiarite v najdôležitejší deň v živote.</p>
              </div>
              <div class="d-flex justify-content-center py-3 scroll-element js-scroll fade-right">
                <p>Široká variabilita materiálov, strihov a farieb.</p>
              </div>
              <div class="d-flex justify-content-center py-3 scroll-element js-scroll fade-left">
                <p>Svadobné šaty nie len výnímočné na pohľad, ale aj praktické a nositeľné zároveň.</p>
              </div>
              <div class="d-flex justify-content-center py-3 scroll-element js-scroll fade-right">
                <p>Šaty svetoznámych značiek od veľkosti 34 do veľkosti 54.</p>
              </div>
              <div class="d-flex justify-content-center py-3 scroll-element js-scroll fade-left">
                <p>Maximálne súkromie pre Vás aj Váš doprovod pri skúšaní svadobných šiat.</p>
              </div>
              </div>
          </div>
          
          <div class="img-2">
           <div style="background-color: rgba(255,255,255, 0.75); padding: 5em 0">
              <!-- second texts -->
              <div class="withDress scroll-element js-scroll fade-up">
                <h2 class="my-4"><u>Čo dostanete k svadobným šatám?</u></h2>
                <ul>
                  <li>závoj a bolerko podľa vlastného výberu</li>
                  <li>zľavu 50% na spoločenské popolnočné šaty pre seba</li>
                  <li>zľavu 10% na spoločenské šaty pre svadobné mamy, družičky, sestry, sesternice</li>
                </ul>
              </div>
              
              <div class="py-4 scroll-element js-scroll fade-up">
                <p>Každý rok prinášame nové kolekcie svadobných šiat. Je tu aj možnosť kúpy svadobných šiat z predošlej kolekcie za <b>výnimočné ceny</b> alebo objednania šiat na mieru z najnovšej kolekcie.</p>
              </div>
              
              <div class="py-4 scroll-element js-scroll fade-up">
                <p>Najlepšia reklama je pre nás naša <b>výnimočná a spokojná nevesta</b> a našou úlohou je z každej z Vás takúto výnimočnú a spokojnú nevestu urobiť.</p>
              </div>
              </div>
          </div>
          <div class="img-3">  
           <div class="px-4" style="background-color: rgba(255,255,255, 0.75); padding: 5em 0">
              <!-- testimonials -->
              <div class="owl-carousel owl-theme testimonial-container scroll-element js-scroll fade-up">
                    <div class="item">
                      <span class="fas fa-quote-left fa-2x"></span>
                      <p class="testimonial-citation my-4">Môžem povedať z vlastnej skúsenosti, že moja nastavajúca manželka bola ta najkrajšia a najnádhernešia nevesta na svete. V dverách keď som ju videl mi odišiel dych, obraz, zvuk a hlavne bola ta najkrajšia moja budúca manželka na svete kedže ani vlastný "manžel" ju nespoznal na chodbe, že aká je nádherna 😊 Nikdy neľutujem a Salón VIVIEN chválim. 😊 Ďakujem za ten nádherny pohľad a ešte krajší svadobný večer. 😊😘</p>
                      <h4>Ján S.</h4>
                    </div>
                    <div class="item">
                      <span class="fas fa-quote-left fa-2x"></span>
                      <p class="testimonial-citation my-4">Veľká vďaka Svadobnému Salónu Vivien za ochotu, trpezlivosť, radu pri vyberaní svadobných šiat, nádherný výber šiat aj závojov. Ako nevesta som navštívila mnoho salónov, ale iba v tomto som bola nadmieru spokojná. Šaty boli pohodlné a upravené podľa mojich predstáv, začo veľka vďaka celému kolektívu svadobného salónu Vivien. Móžem len a len odporúčať. 👌🤗</p>
                      <h4>Mária Dz.</h4>
                    </div>
                    <div class="item">
                      <span class="fas fa-quote-left fa-2x"></span>
                      <p class="testimonial-citation my-4">Svadobný salón mi dopomohol splniť si môj sen krásnymi svadobnými šatami a k popolnočným nemám slov - nikto neprehliadol, že prišla nevesta. Bola som nad mieru spokojná, milý a ochotný personal. Určite odporúčam odomňa 💯 bodov! Veľké ďakujem 😀😘😇👰💍💒🎁😉</p>
                      <h4>Vierka J.</h4>
                    </div>
                    <div class="item">
                      <span class="fas fa-quote-left fa-2x"></span>
                      <p class="testimonial-citation my-4">Ďakujem krásne za úžasné svadobné šaty v ktorých som sa cítila ako princezná. Odporúčam salón všetkými desiatimi 🤗</p>
                      <h4>Daniela K.</h4>
                    </div>
                    <div class="item">
                      <span class="fas fa-quote-left fa-2x"></span>
                      <p class="testimonial-citation my-4">Ja napíšem len toľko : Ďakujem Vám za skvelý prístup a za tie najkrajšie šaty aké som si mohla priať 🙂 navštíviť vás salón bolo to najlepšie rozhodnutie ♥️</p>
                      <h4>Marcela P.</h4>
                    </div>
              </div>
              </div>
              </div>
          </div>
        
      </div>
    </article>
    `);
}

/*
export const home = () => {
    return (`
    <article id="home">
      <div class="text-center" style="background-color: rgba(255,255,255, 0.75)">
        <div class="container pt-5">
          <h1 class="citation">Keď sa sen stáva skutočnosťou...</h1>
          
          <div class="scroll-container mt-5 px-4">
              <!-- first texts -->
              <div class="d-flex justify-content-center mb-3 scroll-element js-scroll fade-left">
                <p>Šaty v ktorých zažiarite v najdôležitejší deň v živote.</p>
              </div>
              <div class="d-flex justify-content-center py-3 scroll-element js-scroll fade-right">
                <p>Široká variabilita materiálov, strihov a farieb.</p>
              </div>
              <div class="d-flex justify-content-center py-3 scroll-element js-scroll fade-left">
                <p>Svadobné šaty nie len výnímočné na pohľad, ale aj praktické a nositeľné zároveň.</p>
              </div>
              <div class="d-flex justify-content-center py-3 scroll-element js-scroll fade-right">
                <p>Šaty svetoznámych značiek od veľkosti 34 do veľkosti 54.</p>
              </div>
              <div class="d-flex justify-content-center py-3 scroll-element js-scroll fade-left">
                <p>Maximálne súkromie pre Vás aj Váš doprovod pri skúšaní svadobných šiat.</p>
              </div>
              
              <!-- second texts -->
              <div class="withDress scroll-element js-scroll fade-up">
                <h2 class="my-4"><u>Čo dostanete k svadobným šatám?</u></h2>
                <ul>
                  <li>závoj a bolerko podľa vlastného výberu</li>
                  <li>zľavu 50% na spoločenské popolnočné šaty pre seba</li>
                  <li>zľavu 10% na spoločenské šaty pre svadobné mamy, družičky, sestry, sesternice</li>
                </ul>
              </div>
              
              <div class="py-4 scroll-element js-scroll fade-up">
                <p>Každý rok prinášame nové kolekcie svadobných šiat. Je tu aj možnosť kúpy svadobných šiat z predošlej kolekcie za <b>výnimočné ceny</b> alebo objednania šiat na mieru z najnovšej kolekcie.</p>
              </div>
              
              <div class="py-4 scroll-element js-scroll fade-up">
                <p>Najlepšia reklama je pre nás naša <b>výnimočná a spokojná nevesta</b> a našou úlohou je z každej z Vás takúto výnimočnú a spokojnú nevestu urobiť.</p>
              </div>
              
              <!-- testimonials -->
              <div class="owl-carousel owl-theme testimonial-container scroll-element js-scroll fade-up">
                    <div class="item">
                      <span class="fas fa-quote-left fa-2x"></span>
                      <p class="testimonial-citation my-4">Môžem povedať z vlastnej skúsenosti, že moja nastavajúca manželka bola ta najkrajšia a najnádhernešia nevesta na svete. V dverách keď som ju videl mi odišiel dych, obraz, zvuk a hlavne bola ta najkrajšia moja budúca manželka na svete kedže ani vlastný "manžel" ju nespoznal na chodbe, že aká je nádherna 😊 Nikdy neľutujem a Salón VIVIEN chválim. 😊 Ďakujem za ten nádherny pohľad a ešte krajší svadobný večer. 😊😘</p>
                      <h4>Ján S.</h4>
                    </div>
                    <div class="item">
                      <span class="fas fa-quote-left fa-2x"></span>
                      <p class="testimonial-citation my-4">Veľká vďaka Svadobnému Salónu Vivien za ochotu, trpezlivosť, radu pri vyberaní svadobných šiat, nádherný výber šiat aj závojov. Ako nevesta som navštívila mnoho salónov, ale iba v tomto som bola nadmieru spokojná. Šaty boli pohodlné a upravené podľa mojich predstáv, začo veľka vďaka celému kolektívu svadobného salónu Vivien. Móžem len a len odporúčať. 👌🤗</p>
                      <h4>Mária Dz.</h4>
                    </div>
                    <div class="item">
                      <span class="fas fa-quote-left fa-2x"></span>
                      <p class="testimonial-citation my-4">Svadobný salón mi dopomohol splniť si môj sen krásnymi svadobnými šatami a k popolnočným nemám slov - nikto neprehliadol, že prišla nevesta. Bola som nad mieru spokojná, milý a ochotný personal. Určite odporúčam odomňa 💯 bodov! Veľké ďakujem 😀😘😇👰💍💒🎁😉</p>
                      <h4>Vierka J.</h4>
                    </div>
                    <div class="item">
                      <span class="fas fa-quote-left fa-2x"></span>
                      <p class="testimonial-citation my-4">Ďakujem krásne za úžasné svadobné šaty v ktorých som sa cítila ako princezná. Odporúčam salón všetkými desiatimi 🤗</p>
                      <h4>Daniela K.</h4>
                    </div>
                    <div class="item">
                      <span class="fas fa-quote-left fa-2x"></span>
                      <p class="testimonial-citation my-4">Ja napíšem len toľko : Ďakujem Vám za skvelý prístup a za tie najkrajšie šaty aké som si mohla priať 🙂 navštíviť vás salón bolo to najlepšie rozhodnutie ♥️</p>
                      <h4>Marcela P.</h4>
                    </div>
              </div>
          </div>
        </div>
      </div>
    </article>
    `);
}
*/

/**
 * display dresses
 * @returns {string} - html template for dresses
 */
export const dresses = () => {
    return (`
    <article class="text-center">
      <div class="container pt-5">
        <div class="row">
    <!-- start iterating through dresses -->
          {{#dresses}}
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <article class="card">
    <!--  card head -->
            <div class="card__eye">
                <i class="fas fa-eye" style="cursor: pointer" onclick="handleModal('{{id_dress}}')"></i>
              </div>
              <header class="card__thumb">
                <img class="hover-shadow cursor" 
                src="public/figures/uploads/{{photo.0}}" 
                onclick="handleModal('{{id_dress}}')"
                alt="image">
              </header>
    <!-- card body -->
              <div class="card__body">
                {{#sale}}<div class="card__sale">Výpredaj {{price}} €</div>{{/sale}}
                {{^sale}}<div class="card__sale">Požičanie</div>{{/sale}}
                <div class="card__point"><i class="fas fa-chevron-down"></i></div>
                <h2 class="card__title">{{name}}</h2>
                <div class="card__subtitle">
                  <div class="colors">
                    {{#color}}
                    <span>{{.}} <span class="color" style="background-color: var(--{{.}})"></span></span>
                    {{/color}}
                  </div>
                </div>
                <p class="card__description">
                  Veľkosť: {{size}}
                </p>
              </div>
            </article>
      <!-- modal - carousel with photos -->
            <div class="modal fade" id="modal-{{id_dress}}" tabindex="-1" aria-labelledby="myModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ModalLabel-{{id_dress}}">{{name}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close carousel"></button>
                  </div>
                  <div class="modal-body">
        <!-- carousel -->
                  <div id="carouselControls-{{id_dress}}" class="carousel slide" data-bs-interval="false" data-bs-ride="carousel">
                      <div class="carousel-inner" id="inner-{{id_dress}}">
                        {{#photo}}
                        <div class="carousel-item">
                          <img class="d-block" src="public/figures/uploads/{{.}}" alt="slide">
                        </div>
                        {{/photo}}
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls-{{id_dress}}" data-bs-slide="prev" aria-label="Prev image">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Predchadzajúce</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselControls-{{id_dress}}" data-bs-slide="next" aria-label="Next image">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Ďalšie</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {{/dresses}}
    <!-- end of iterating through dresses -->
        </div>
      </div>
    <!-- pagination -->
      <nav class="text-center">
          <ul class="pagination justify-content-center">
          
            {{#prev}}
            <li class="page-item">
              <a class="page-link" href="#dresses/{{categoryEN}}/{{prev}}" aria-label="Previous">
            {{/prev}}
            {{^prev}}
            <li class="page-item disabled">
              <a class="page-link" tabindex="-1" href="#dresses/{{categoryEN}}/{{prev}}" aria-label="Previous">
            {{/prev}}
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            
            {{#pages}}
            <li class="page-item {{class}}">
            <a class="page-link" href="#dresses/{{categoryEN}}/{{page}}">{{page}}</a>
            </li>
            {{/pages}}
            
            {{#next}}
            <li class="page-item">
              <a class="page-link" href="#dresses/{{categoryEN}}/{{next}}" aria-label="Next">
            {{/next}}
            {{^next}}
            <li class="page-item disabled">
              <a class="page-link" tabindex="-1" href="#dresses/{{categoryEN}}/{{next}}" aria-label="Next">
            {{/next}}
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
    </article>
`);
}

/**
 * contact page
 * @returns {string} - html template for contact page
 */
export const contact = () => {
    return (`
    <article class="text-center">
      <div class="container myText">
          <div class="row">
            <div class="col-md mb-4">
    <!-- info -->
                <p>Odporúčame sa na skúšanie svadobných a spoločenských šiat <b>vopred objednať telefonicky.</b></p>
                <p>V opačnom prípade Vám nevieme zaručiť skúšanie šiat vo Vami zvolenom, ale neohlásenom termíne.</p>
                <br>
                <p class="my-4"><i class="fas fa-phone fa-lg"></i>  0905 349 676</p>
                <p class="mb-4"><i class="fas fa-home fa-lg"></i>  Námestie Slobody 52, 083 01 Sabinov</p>
                <table class="table-contact mb-4">
                    <tr>
                        <th>Pondelok</th>
                        <td>08:30 - 17:00</td>
                    </tr>
                    <tr>
                        <th>Utorok</th>
                        <td>08:30 - 17:00</td>
                    </tr>
                    <tr>
                        <th>Streda</th>
                        <td>08:30 - 17:00</td>
                    </tr>
                    <tr>
                        <th>Štvrtok</th>
                        <td>08:30 - 17:00</td>
                    </tr>
                    <tr>
                        <th>Piatok</th>
                        <td>08:30 - 17:00</td>
                    </tr>
                    <tr>
                        <th>Sobota</th>
                        <td>objednávky</td>
                    </tr>
                    <tr>
                        <th>Nedeľa</th>
                        <td>zatvorené</td>
                    </tr>
                </table>
    <!-- social media links -->
                <div class="socialIcons">
                  <a class="socialIcon" href="https://www.facebook.com/SalonVivienSabinov" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="socialIcon" href="https://instagram.com/svadobnysalonvivien" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
            </div>
          </div>
      </div>
    <!-- google map -->  
      <div class="mt-5">
        <div style="max-width:100%;overflow:hidden;color:red;width:100%;height:500px;">
          <div id="googlemaps-display" style="height:100%; width:100%;max-width:100%;">
            <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Námestie+Slobody+52+Sabinov&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
          </div>
        </div>
      </div>
    </article>
    `);
}

/**
 * shoes page
 * @returns {string}
 */
export const shoes = () => {
    return (`
    <article class="text-center">
      
      <!-- text -->
      <div class="container myText">
      
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></i></div>
          <div class="col-10 text-start">
            <p>Svadobné topánky na priamy predaj alebo na objednávku značky Growikar.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Topánky od celkom nízkeho 0,5 cm opätku až po 9 cm. Opätky majú nie len rôzne výšky, ale aj hrúbky.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>V ponuke sú možnosti výberu materiálov, ako je koža, satén, krajka.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Možnosť výberu dekorácií a ozdôb na topánke. Čakacia doba pri objednaní cca 1 mesiac.</p>
          </div>
        </div>  
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Čakacia doba pri objednaní cca 1 mesiac.</p>
          </div>
        </div> 
      </div>
      
      <!-- GALLERY -->
      <div class="container mt-5">
        <div id="gallery" class="row justify-content-center" data-bs-toggle="modal" data-bs-target="#lightbox-modal">
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_1.jpg" alt="svadobné topánky 1" data-bs-target="#carousel-gallery" data-bs-slide-to="0">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_2.jpg" alt="svadobné topánky 2" data-bs-target="#carousel-gallery" data-bs-slide-to="1">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_3.jpg" alt="svadobné topánky 3" data-bs-target="#carousel-gallery" data-bs-slide-to="2">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_4.jpg" alt="svadobné topánky 4" data-bs-target="#carousel-gallery" data-bs-slide-to="3">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_5.jpg" alt="svadobné topánky 5" data-bs-target="#carousel-gallery" data-bs-slide-to="4">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_6.jpg" alt="svadobné topánky 6" data-bs-target="#carousel-gallery" data-bs-slide-to="5">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_7.jpg" alt="svadobné topánky 7" data-bs-target="#carousel-gallery" data-bs-slide-to="6">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_8.jpg" alt="svadobné topánky 8" data-bs-target="#carousel-gallery" data-bs-slide-to="7">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_9.jpg" alt="svadobné topánky 9" data-bs-target="#carousel-gallery" data-bs-slide-to="8">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_10.jpg" alt="svadobné topánky 10" data-bs-target="#carousel-gallery" data-bs-slide-to="9">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_11.jpg" alt="svadobné topánky 11" data-bs-target="#carousel-gallery" data-bs-slide-to="10">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_12.jpg" alt="svadobné topánky 12" data-bs-target="#carousel-gallery" data-bs-slide-to="11">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_13.jpg" alt="svadobné topánky 13" data-bs-target="#carousel-gallery" data-bs-slide-to="12">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_14.jpg" alt="svadobné topánky 14" data-bs-target="#carousel-gallery" data-bs-slide-to="13">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_15.jpg" alt="svadobné topánky 15" data-bs-target="#carousel-gallery" data-bs-slide-to="14">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_16.jpg" alt="svadobné topánky 16" data-bs-target="#carousel-gallery" data-bs-slide-to="15">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_17.jpg" alt="svadobné topánky 17" data-bs-target="#carousel-gallery" data-bs-slide-to="16">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_18.jpg" alt="svadobné topánky 18" data-bs-target="#carousel-gallery" data-bs-slide-to="17">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/shoes_19.jpg" alt="svadobné topánky 19" data-bs-target="#carousel-gallery" data-bs-slide-to="18">
          </div>
          
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/ozdoba_1.jpg" alt="ozdoba na topánky 1" data-bs-target="#carousel-gallery" data-bs-slide-to="19">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/ozdoba_2.jpg" alt="ozdoba na topánky 2" data-bs-target="#carousel-gallery" data-bs-slide-to="20">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/ozdoba_3.jpg" alt="ozdoba na topánky 3" data-bs-target="#carousel-gallery" data-bs-slide-to="21">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/ozdoba_4.jpg" alt="ozdoba na topánky 4" data-bs-target="#carousel-gallery" data-bs-slide-to="22">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/ozdoba_5.jpg" alt="ozdoba na topánky 5" data-bs-target="#carousel-gallery" data-bs-slide-to="23">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/ozdoba_6.jpg" alt="ozdoba na topánky 6" data-bs-target="#carousel-gallery" data-bs-slide-to="24">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/ozdoba_7.jpg" alt="ozdoba na topánky 7" data-bs-target="#carousel-gallery" data-bs-slide-to="25">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/ozdoba_8.jpg" alt="ozdoba na topánky 8" data-bs-target="#carousel-gallery" data-bs-slide-to="26">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/shoes/ozdoba_9.jpg" alt="ozdoba na topánky 9" data-bs-target="#carousel-gallery" data-bs-slide-to="27">
          </div>
        </div>
      </div>
      <!-- modal for carousel -->
      <div id="lightbox-modal" class="modal" tabindex="-1">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Svadobné topánky</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close carousel"></button>
              </div>
              <div class="modal-body">
                <!-- carousel -->
                <div id="carousel-gallery" class="carousel slide" data-bs-ride="carousel" data-bs-interval="">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="public/figures/shoes/shoes_1.jpg" class="d-block w-100"  alt="svadobné topánky 1">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_2.jpg" class="d-block w-100" alt="svadobné topánky 2">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_3.jpg" class="d-block w-100" alt="svadobné topánky 3">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_4.jpg" class="d-block w-100" alt="svadobné topánky 4">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_5.jpg" class="d-block w-100" alt="svadobné topánky 5">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_6.jpg" class="d-block w-100" alt="svadobné topánky 6">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_7.jpg" class="d-block w-100" alt="svadobné topánky 7">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_8.jpg" class="d-block w-100" alt="svadobné topánky 8">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_9.jpg" class="d-block w-100" alt="svadobné topánky 9">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_10.jpg" class="d-block w-100" alt="svadobné topánky 10">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_11.jpg" class="d-block w-100" alt="svadobné topánky 11">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_12.jpg" class="d-block w-100" alt="svadobné topánky 12">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_13.jpg" class="d-block w-100" alt="svadobné topánky 13">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_14.jpg" class="d-block w-100" alt="svadobné topánky 14">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_15.jpg" class="d-block w-100" alt="svadobné topánky 15">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_16.jpg" class="d-block w-100" alt="svadobné topánky 16">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_17.jpg" class="d-block w-100" alt="svadobné topánky 17">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_18.jpg" class="d-block w-100" alt="svadobné topánky 18">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/shoes_19.jpg" class="d-block w-100" alt="svadobné topánky 19">
                    </div>
                    
                    <div class="carousel-item">
                      <img src="public/figures/shoes/ozdoba_1.jpg" class="d-block w-100" alt="ozdoba na topánky 1">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/ozdoba_2.jpg" class="d-block w-100" alt="ozdoba na topánky 2">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/ozdoba_3.jpg" class="d-block w-100" alt="ozdoba na topánky 3">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/ozdoba_4.jpg" class="d-block w-100" alt="ozdoba na topánky 4">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/ozdoba_5.jpg" class="d-block w-100" alt="ozdoba na topánky 5">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/ozdoba_6.jpg" class="d-block w-100" alt="ozdoba na topánky 6">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/ozdoba_7.jpg" class="d-block w-100" alt="ozdoba na topánky 7">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/ozdoba_8.jpg" class="d-block w-100" alt="ozdoba na topánky 8">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/shoes/ozdoba_9.jpg" class="d-block w-100" alt="ozdoba na topánky 9">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carousel-gallery" data-bs-slide="prev" aria-label="Prev image">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carousel-gallery" data-bs-slide="next" aria-label="Next image">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
               
              </div>
            </div>
          </div>
      </div>
    </article>
    `);
}

/**
 * coats page
 * @returns {string}
 */
export const coats = () => {
    return (`
    <article class="text-center">

      <!-- text -->
      <div class="container myText">
           
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></i></div>
          <div class="col-10 text-start">
            <p>Každá naša nevesta má v cene svadobných šiat bolerko alebo kabátik.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Na výber sú farby white a ivory.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Kabátiky z materiálov, ako mušelín, tyl, krajka, satén, taft a na zimné obdobie kožušinky rôznych tvarov.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Ak máte svoje svadobné šaty a od nás si chcete požičať bolerko, odporúčame si na skúšku doniesť aj šatičky aby nám všetko pekne ladilo.</p>
          </div>
        </div>  
      </div>
      
      <!-- GALLERY -->
      <div class="container mt-5">
        <div id="gallery" class="row justify-content-center" data-bs-toggle="modal" data-bs-target="#lightbox-modal">
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_1.jpg" alt="svadobný kabátik 1" data-bs-target="#carousel-gallery" data-bs-slide-to="0">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_2.jpg" alt="svadobný kabátik 2" data-bs-target="#carousel-gallery" data-bs-slide-to="1">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_3.jpg" alt="svadobný kabátik 3" data-bs-target="#carousel-gallery" data-bs-slide-to="2">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_4.jpg" alt="svadobný kabátik 4" data-bs-target="#carousel-gallery" data-bs-slide-to="3">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_5.jpg" alt="svadobný kabátik 5" data-bs-target="#carousel-gallery" data-bs-slide-to="4">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_6.jpg" alt="svadobný kabátik 6" data-bs-target="#carousel-gallery" data-bs-slide-to="5">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_7.jpg" alt="svadobný kabátik 7" data-bs-target="#carousel-gallery" data-bs-slide-to="6">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_8.jpg" alt="svadobné topánky 8" data-bs-target="#carousel-gallery" data-bs-slide-to="7">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_9.jpg" alt="svadobný kabátik 9" data-bs-target="#carousel-gallery" data-bs-slide-to="8">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_10.jpg" alt="svadobný kabátik 10" data-bs-target="#carousel-gallery" data-bs-slide-to="9">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_11.jpg" alt="svadobný kabátik 11" data-bs-target="#carousel-gallery" data-bs-slide-to="10">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_12.jpg" alt="svadobný kabátik 12" data-bs-target="#carousel-gallery" data-bs-slide-to="11">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_13.jpg" alt="svadobný kabátik 13" data-bs-target="#carousel-gallery" data-bs-slide-to="12">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_14.jpg" alt="svadobný kabátik 14" data-bs-target="#carousel-gallery" data-bs-slide-to="13">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_15.jpg" alt="svadobný kabátik 15" data-bs-target="#carousel-gallery" data-bs-slide-to="14">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_16.jpg" alt="svadobný kabátik 16" data-bs-target="#carousel-gallery" data-bs-slide-to="15">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_17.jpg" alt="svadobný kabátik 17" data-bs-target="#carousel-gallery" data-bs-slide-to="16">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_18.jpg" alt="svadobný kabátik 18" data-bs-target="#carousel-gallery" data-bs-slide-to="17">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_19.jpg" alt="svadobný kabátik 19" data-bs-target="#carousel-gallery" data-bs-slide-to="18">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_20.jpg" alt="svadobný kabátik 20" data-bs-target="#carousel-gallery" data-bs-slide-to="19">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_21.jpg" alt="svadobný kabátik 21" data-bs-target="#carousel-gallery" data-bs-slide-to="20">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_22.jpg" alt="svadobný kabátik 22" data-bs-target="#carousel-gallery" data-bs-slide-to="21">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_23.jpg" alt="svadobný kabátik 23" data-bs-target="#carousel-gallery" data-bs-slide-to="22">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_24.jpg" alt="svadobný kabátik 24" data-bs-target="#carousel-gallery" data-bs-slide-to="23">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/coats/coat_25.jpg" alt="svadobný kabátik 25" data-bs-target="#carousel-gallery" data-bs-slide-to="24">
          </div>
        </div>
      </div>
      <!-- modal for carousel -->
      <div id="lightbox-modal" class="modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Svadobný kabátiky</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close carousel"></button>
              </div>
              <div class="modal-body">
                <!-- carousel -->
                <div id="carousel-gallery" class="carousel slide" data-bs-ride="carousel" data-bs-interval="">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="public/figures/coats/coat_1.jpg" class="d-block w-100"  alt="svadobný kabátik 1">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_2.jpg" class="d-block w-100" alt="svadobný kabátik 2">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_3.jpg" class="d-block w-100" alt="svadobný kabátik 3">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_4.jpg" class="d-block w-100" alt="svadobný kabátik 4">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_5.jpg" class="d-block w-100" alt="svadobný kabátik 5">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_6.jpg" class="d-block w-100" alt="svadobný kabátik 6">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_7.jpg" class="d-block w-100" alt="svadobný kabátik 7">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_8.jpg" class="d-block w-100" alt="svadobný kabátik 8">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_9.jpg" class="d-block w-100" alt="svadobný kabátik 9">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_10.jpg" class="d-block w-100" alt="svadobný kabátik 10">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_11.jpg" class="d-block w-100" alt="svadobný kabátik 11">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_12.jpg" class="d-block w-100" alt="svadobný kabátik 12">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_13.jpg" class="d-block w-100" alt="svadobný kabátik 13">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_14.jpg" class="d-block w-100" alt="svadobný kabátik 14">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_15.jpg" class="d-block w-100" alt="svadobný kabátik 15">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_16.jpg" class="d-block w-100" alt="svadobný kabátik 16">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_17.jpg" class="d-block w-100" alt="svadobný kabátik 17">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_18.jpg" class="d-block w-100" alt="svadobný kabátik 18">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_19.jpg" class="d-block w-100" alt="svadobný kabátik 19">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_20.jpg" class="d-block w-100" alt="svadobný kabátik 20">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_21.jpg" class="d-block w-100" alt="svadobný kabátik 21">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_22.jpg" class="d-block w-100" alt="svadobný kabátik 22">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_23.jpg" class="d-block w-100" alt="svadobný kabátik 23">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_24.jpg" class="d-block w-100" alt="svadobný kabátik 24">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/coats/coat_25.jpg" class="d-block w-100" alt="svadobný kabátik 25">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carousel-gallery" data-bs-slide="prev" aria-label="Prev image">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carousel-gallery" data-bs-slide="next" aria-label="Next image">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
               
              </div>
            </div>
          </div>
      </div>
    </article>
    `);
}

/**
 * veils page
 * @returns {string}
 */
export const veils = () => {
    return (`
    <article class="text-center">

      <!-- text -->
      <div class="container myText">
        <div class="row justify-content-center">
          <div class="col-10 text-start text-center">
            <p>Závoj robí nevestu dokonalou...</p>
          </div>
        </div>
      
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></i></div>
          <div class="col-10 text-start">
            <p>Závoj má naša nevesta zdarma k svadobným šatám.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>V ponuke je skoro 90 závojov od dĺžky 0,9 m až po 4 m.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Pri každom výbere šiat pristupujeme individuálne, kde berieme do úvahy požiadavky nevesty, účes, ale aj výber svadobných šiat.</p>
          </div>
        </div> 
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>K bohato zdobeným šatám volíme jednoduchšie závoje buď čisté, alebo so swarovskými kryštálmi, k jednoduchším šatám si môžme dovoliť aj krajkový katedrálny závoj.</p>
          </div>
        </div>  
         
      </div>
      
      <!-- GALLERY -->
      <div class="container mt-5">
        <div id="gallery" class="row justify-content-center" data-bs-toggle="modal" data-bs-target="#lightbox-modal">
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/veils/veil_1.jpg" alt="svadobný závoj 1" data-bs-target="#carousel-gallery" data-bs-slide-to="0">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/veils/veil_2.jpg" alt="svadobný závoj 2" data-bs-target="#carousel-gallery" data-bs-slide-to="1">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/veils/veil_3.jpg" alt="svadobný závoj 3" data-bs-target="#carousel-gallery" data-bs-slide-to="2">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/veils/veil_4.jpg" alt="svadobný závoj 4" data-bs-target="#carousel-gallery" data-bs-slide-to="3">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/veils/veil_5.jpg" alt="svadobný závoj 5" data-bs-target="#carousel-gallery" data-bs-slide-to="4">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/veils/veil_6.jpg" alt="svadobný závoj 6" data-bs-target="#carousel-gallery" data-bs-slide-to="5">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/veils/veil_7.jpg" alt="svadobný závoj 7" data-bs-target="#carousel-gallery" data-bs-slide-to="6">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/veils/veil_8.jpg" alt="svadobný závoj 8" data-bs-target="#carousel-gallery" data-bs-slide-to="7">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/veils/veil_9.jpg" alt="svadobný závoj 9" data-bs-target="#carousel-gallery" data-bs-slide-to="8">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/veils/veil_10.jpg" alt="svadobný závoj 10" data-bs-target="#carousel-gallery" data-bs-slide-to="9">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/veils/veil_11.jpg" alt="svadobný závoj 11" data-bs-target="#carousel-gallery" data-bs-slide-to="10">
          </div>
        </div>
      </div>
      <!-- modal for carousel -->
      <div id="lightbox-modal" class="modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Závoj</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close carousel"></button>
              </div>
              <div class="modal-body">
                <!-- carousel -->
                <div id="carousel-gallery" class="carousel slide" data-bs-ride="carousel" data-bs-interval="">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="public/figures/veils/veil_1.jpg" class="d-block w-100"  alt="svadobný závoj 1">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/veils/veil_2.jpg" class="d-block w-100" alt="svadobný závoj 2">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/veils/veil_3.jpg" class="d-block w-100" alt="svadobný závoj 3">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/veils/veil_4.jpg" class="d-block w-100" alt="svadobný závoj 4">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/veils/veil_5.jpg" class="d-block w-100" alt="svadobný závoj 5">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/veils/veil_6.jpg" class="d-block w-100" alt="svadobný závoj 6">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/veils/veil_7.jpg" class="d-block w-100" alt="svadobný závoj 7">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/veils/veil_8.jpg" class="d-block w-100" alt="svadobný závoj 8">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/veils/veil_9.jpg" class="d-block w-100" alt="svadobný závoj 9">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/veils/veil_10.jpg" class="d-block w-100" alt="svadobný závoj 10">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/veils/veil_11.jpg" class="d-block w-100" alt="svadobný závoj 11">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carousel-gallery" data-bs-slide="prev" aria-label="Prev image">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carousel-gallery" data-bs-slide="next" aria-label="Next image">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </article>
    `);
}

/**
 * jewellery page
 * @returns {string}
 */
export const jewellery = () => {
    return (`
    <article class="text-center">

      <!-- text -->
      <div class="container myText">
        <div class="row justify-content-center">
          <div class="col-10 text-start text-center">
            <p>K dokonalej neveste patrí dokonalý šperk...</p>
          </div>
        </div>
      
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></i></div>
          <div class="col-10 text-start">
            <p>Svadobné šperky z Jabloneckej bižutérie, kde dominuje brúsené sklo a perlička.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Aj pri výbere týchto doplnkov treba pristupovať individuálne a citlivo s dôrazom na už vybrané svadobné šaty.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Ideálne je vyberať šperky spolu so svadobnými šatami a hneď vidieť, ako spolu ladia.</p>
          </div>
        </div> 
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Ponuka šperkov sa neustále mení a dopĺňa, preto je dobré navštíviť salón osobne.</p>
          </div>
        </div>  
         
      </div>
      
      <!-- GALLERY -->
      <div class="container mt-5">
        <div id="gallery" class="row justify-content-center" data-bs-toggle="modal" data-bs-target="#lightbox-modal">
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_1.jpg" alt="šperk 1" data-bs-target="#carousel-gallery" data-bs-slide-to="0">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_2.jpg" alt="šperk 2" data-bs-target="#carousel-gallery" data-bs-slide-to="1">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_3.jpg" alt="šperk 3" data-bs-target="#carousel-gallery" data-bs-slide-to="2">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_4.jpg" alt="šperk 4" data-bs-target="#carousel-gallery" data-bs-slide-to="3">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_5.jpg" alt="šperk 5" data-bs-target="#carousel-gallery" data-bs-slide-to="4">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_6.jpg" alt="šperk 6" data-bs-target="#carousel-gallery" data-bs-slide-to="5">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_7.jpg" alt="šperk 7" data-bs-target="#carousel-gallery" data-bs-slide-to="6">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_8.jpg" alt="šperk 8" data-bs-target="#carousel-gallery" data-bs-slide-to="7">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_9.jpg" alt="šperk 9" data-bs-target="#carousel-gallery" data-bs-slide-to="8">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_10.jpg" alt="šperk 10" data-bs-target="#carousel-gallery" data-bs-slide-to="9">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_11.jpg" alt="šperk 11" data-bs-target="#carousel-gallery" data-bs-slide-to="10">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_12.jpg" alt="šperk 11" data-bs-target="#carousel-gallery" data-bs-slide-to="11">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_13.jpg" alt="šperk 11" data-bs-target="#carousel-gallery" data-bs-slide-to="12">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_14.jpg" alt="šperk 11" data-bs-target="#carousel-gallery" data-bs-slide-to="13">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/jewellery/jewellery_15.jpg" alt="šperk  11" data-bs-target="#carousel-gallery" data-bs-slide-to="14">
          </div>
        </div>
      </div>
      <!-- modal for carousel -->
      <div id="lightbox-modal" class="modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Bižutéria</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close carousel"></button>
              </div>
              <div class="modal-body">
                <!-- carousel -->
                <div id="carousel-gallery" class="carousel slide" data-bs-ride="carousel" data-bs-interval="">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="public/figures/jewellery/jewellery_1.jpg" class="d-block w-100"  alt="šperk 1">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_2.jpg" class="d-block w-100" alt="šperk 2">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_3.jpg" class="d-block w-100" alt="šperk 3">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_4.jpg" class="d-block w-100" alt="šperk 4">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_5.jpg" class="d-block w-100" alt="šperk 5">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_6.jpg" class="d-block w-100" alt="šperk 6">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_7.jpg" class="d-block w-100" alt="šperk 7">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_8.jpg" class="d-block w-100" alt="šperk 8">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_9.jpg" class="d-block w-100" alt="šperk 9">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_10.jpg" class="d-block w-100" alt="šperk 10">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_11.jpg" class="d-block w-100" alt="šperk 11">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_12.jpg" class="d-block w-100" alt="šperk 12">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_13.jpg" class="d-block w-100" alt="šperk 13">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_14.jpg" class="d-block w-100" alt="šperk 14">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/jewellery/jewellery_15.jpg" class="d-block w-100" alt="šperk 15">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carousel-gallery" data-bs-slide="prev" aria-label="Prev image">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carousel-gallery" data-bs-slide="next" aria-label="Next image">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </article>
    `);
}

/**
 * gowns page
 * @returns {string}
 */
export const gowns = () => {
    return (`
    <article class="text-center">

      <!-- text -->
      <div class="container myText">
      
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></i></div>
          <div class="col-10 text-start">
            <p>Na výber sú farby white, ivory, rose.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Bez alebo s nápisom bride (nevesta).</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2 product-decoration"><i class="fas fa-check fa-2x"></i></div>
          <div class="col-10 text-start">
            <p>Od veľkosti S po XL.</p>
          </div>
        </div> 
         
      </div>
      
      <!-- GALLERY -->
      <div class="container mt-5">
        <div id="gallery" class="row justify-content-center" data-bs-toggle="modal" data-bs-target="#lightbox-modal">
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/gowns/gown_1.jpg" alt="svadobný župan 1" data-bs-target="#carousel-gallery" data-bs-slide-to="0">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/gowns/gown_2.jpg" alt="svadobný župan 2" data-bs-target="#carousel-gallery" data-bs-slide-to="1">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src="public/figures/gowns/gown_3.jpg" alt="svadobný župan 3" data-bs-target="#carousel-gallery" data-bs-slide-to="2">
          </div>
        </div>
      </div>
      <!-- modal for carousel -->
      <div id="lightbox-modal" class="modal" tabindex="-1">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Svadobný župan</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close carousel"></button>
              </div>
              <div class="modal-body">
                <!-- carousel -->
                <div id="carousel-gallery" class="carousel slide" data-bs-ride="carousel" data-bs-interval="">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="public/figures/gowns/gown_1.jpg" class="d-block w-100"  alt="svadobný župan 1">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/gowns/gown_2.jpg" class="d-block w-100" alt="svadobný župan 2">
                    </div>
                    <div class="carousel-item">
                      <img src="public/figures/gowns/gown_3.jpg" class="d-block w-100" alt="svadobný župan 3">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carousel-gallery" data-bs-slide="prev" aria-label="Prev image">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carousel-gallery" data-bs-slide="next" aria-label="Next image">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </article>
    `);
}