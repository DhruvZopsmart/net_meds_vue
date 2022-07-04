<template>
     <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  style=" maxWidth: 540px; maxHeight: 10rem "
                  :src="item.url"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{{item.name}}</h5>
                  <p className="card-text">{{item.para}}</p>
                  <h6 className="card-text">{{item.price}} Rs</h6>

                  <button
                    type="button"
                    className="btn btn-primary"
                    @click="$emit('remove-item' , item.uid)"
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h1>this is single item</h1> -->
</template>

<script>
export default {
   props:{
       item:Object
   },
    emits:['remove-item' ]
}
</script>