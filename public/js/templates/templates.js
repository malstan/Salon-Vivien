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
    <article id="home">
      <div class="text-center" style="background-color: rgba(255,255,255, 0.6)">
        <div class="container pt-5">
          <h1>Page title</h1>
          <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
            dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
            iste.</p>
        </div>
      </div>
    </article>
    `);
}

/**
 * display dresses
 * @returns {string} - html template for dresses
 */
export const dresses = () => {
    return (`
    <article class="text-center">
      <h1 class="m-5">{{categorySK}} šaty</h1>
      <div class="container">
        <div class="row">
    <!-- start iterating through dresses -->
          {{#dresses}}
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <article class="card">
    <!--  card head -->
            <div class="card__eye">
                <i class="fas fa-eye" onclick="handleModal('{{id_dress}}')"></i>
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
                  Veľkosť: {{size}} <br>
                </p>
              </div>
            </article>
      <!-- modal - carousel with photos -->
            <div class="modal fade" id="modal-{{id_dress}}" tabindex="-1" aria-labelledby="myModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ModalLabel-{{id_dress}}">{{name}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls-{{id_dress}}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Predchadzajúce</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselControls-{{id_dress}}" data-bs-slide="next">
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
    <article class="contact text-center">
      <h1 class="myTitle">Kontakt</h1>
      <div class="container">
          <div class="row">
            <div class="col-md mb-4">
    <!-- info -->
                <p class="mb-4"><i class="fas fa-phone fa-lg"></i>  0905 349 676</p>
                <p class="mb-4"><i class="fas fa-home fa-lg"></i>  Námestie Slobody 52 Sabinov</p>
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
                <div>
                  <a class="btn myButton" style="background-color: #3b5998;" href="https://www.facebook.com/SalonVivienSabinov" role="button">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn myButton" style="background-color: #ac2bac;" href="https://instagram.com/svadobnysalonvivien?utm_medium=copy_link" role="button">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
            </div>
            <div class="col-md">
              <img class="w-100 rounded" src="public/figures/shop.jpg" alt="shop image">
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