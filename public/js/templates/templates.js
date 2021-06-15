export const home = () => {
    return (`
    <article id="home" style="background-image: url('figures/MARMARA2.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center top;">
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

export const dresses = () => {
    return (`
    <article class="text-center">
      <h1 class="m-5 p-5">{{categorySK}} šaty</h1>
      <div class="container">
        <div class="row">
        
          {{#dresses}}
          <div class="col-md-3 mb-3">
            <article class="card">
              <header class="card__thumb">
                
                <img class="hover-shadow cursor" 
                src="../../figures/uploads/{{photo.0}}" 
                onclick="handleModal('{{dress_id}}')"
                alt="image">

              </header>
              <div class="card__body">
                {{#sale}}<div class="card__sale">Výpredaj {{price}} €</div>{{/sale}}
                {{^sale}}<div class="card__sale">Požičanie</div>{{/sale}}
                <h2 class="card__title">{{name}}</h2>
                <div class="card__subtitle">
                  <ul class="colors">
                    {{#color}}
                    <li>{{.}} <span style="background-color: var(--{{.}})"></span></li>
                    {{/color}}
                  </ul>
                </div>
                <p class="card__description">
                  size: {{size}} <br>
                  description {{description}} <br>
                </p>
              </div>
            </article>
            <div class="modal fade bd-example-modal-md" id="modal-{{dress_id}}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-md">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ModalLabel-{{dress_id}}">{{name}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                  <div id="carouselControls-{{dress_id}}" class="carousel slide" data-interval="false" data-ride="carousel">
                      <div class="carousel-inner" id="inner-{{dress_id}}">
                        {{#photo}}
                        <div class="carousel-item">
                          <img class="d-block" src="../../figures/uploads/{{.}}" alt="First slide">
                        </div>
                        {{/photo}}
                      </div>
                      <a class="carousel-control-prev" href="#carouseControls-{{dress_id}}" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselControls-{{dress_id}}" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {{#newRow}}
          </div>
          <div class="row">
          {{/newRow}}
          
          {{/dresses}}
        </div>
      </div>
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

export const contact = () => {
    return (`
    <article class="text-center">
      <h1 class="m-5 p-5">Kontakt</h1>
      <div class="container">
          <div class="row">
            <div class="col-sm">
              <p>Telefónne číslo:</p>
            </div>
            <div class="col-sm">
              <img class="w-100" src="figures/shop.jpg" alt="shop image">
            </div>
          </div>
      </div>
      
      <div class="mt-5" style="height: 325px; background-color: darkslategray">
        
      </div>
    </article>
    `);
}