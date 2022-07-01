
  <template>
<div class="">
<nav class="navbar navbar-expand-lg navbar-light text-white  bg-primary">
   <a className="navbar-brand fs-2 text-white ">
              <i className="fas fa-notes-medical"></i> GetMeds
            </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse "  id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
                 <router-link to="/cart" class="nav-link text-white ">cart</router-link>

      </li>
    
      <li class="nav-item">
          <router-link to="/order" class="nav-link text-white ">order</router-link>
      </li>
    </ul>
  
  </div>
</nav>
  </div>
</template>
