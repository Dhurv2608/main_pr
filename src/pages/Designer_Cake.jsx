import React from 'react'

const Designer_Cake = () => {
  return (
    <div>
      <h1 className='mt-4 ms-3'>Designer Cake</h1>

      <div className='row'>
        <div className='col-3'>
          <div className='side_title'>
            Filter:
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Availability
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex">
                  <input type='checkbox' className=''></input><div className='ms-2 dropdown_sidebar'>In stock</div>
                </div>
                <div className="accordion-body d-flex">
                  <input type='checkbox' className=''></input><div className='ms-2 dropdown_sidebar'>Out of stock</div>
                </div>
              </div>
            </div>


          </div>





        </div>
        <div className='col-9'></div>
      </div>
    </div>
  )
}

export default Designer_Cake