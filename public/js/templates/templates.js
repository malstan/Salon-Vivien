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
      <h1 class="m-5 p-5">{{category}} šaty</h1>
      <div class="container">
        <div class="row">
        
          {{#dresses.dresses}}
          <div class="col-md-3">
            <a class="dress-link" href="#dress/{{dress_id}}">
              <img class="rounded" src="figures/MARMARA2.jpg" alt="image">
              <p>name: {{name}}</p>
            </a>
          </div>
          
          {{#newRow}}
          </div>
          <div class="row">
          {{/newRow}}
          
          {{/dresses.dresses}}
        </div>
      </div>
    </article>
`);
}

export const singleDress = () => {
    return (`
    <article class="text-center">
        <h1 class="m-5 p-5">{{name}}</h1>
        <p><a href="#dresses/{{category}}">back</a></p
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <img src="figures/MARMARA2.jpg" alt="image">
                </div>
                <div class="col-sm">
                    <p>{{description}}</p>
                    <p>{{size}}</p>
                    <p>{{color}}</p>
                    <p>{{sale}}</p>
                    <p>{{category}}</p>
                </div>
            </div>
        </div>
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

export const errorDisplay = () => {
    return (`
        <article class="text-center">
          <p>Error: {{error}}</p>
        </article>
    `);
}