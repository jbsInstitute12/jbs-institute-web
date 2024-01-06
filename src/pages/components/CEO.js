import CEO1 from "../../assets/images/CEO1.png"
import CEO2 from "../../assets/images/CEO2.png"

const CEO = () => {


  return (
    <>
      <section id='ceoSection' className='p100-md-y p40-y bg-fourth'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-12">
              <div className="bannerContent fw-bold text-center m40-sm-bottom m20-bottom">
                <div className='fs-lg-20 fs-md-16 fs-12 d-flex align-items-center justify-content-center'>
                  <span className='m10-right'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
                  <span>STUDENT’S BRIGHT FUTURE MAKER</span>
                  <span className='m10-left'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
                </div>
                <div className='fs-lg-50 fs-md-40 fs-20 text-second'>Our Placement Partners</div>
                <p className='fs-lg-16 fw-semibold fs-md-16 fs-12 text-gray m10-top'>No matter what your requirement is; Mobile App and web development, we have a specific approach which comprises of the following.
</p>
              </div>
            </div>
            <div className="col-12">
              <div className="ceoDetails">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                    <CEOBox image={CEO1} name={`Monil Kakadiya`} position={`CEO`} />
                  </div>
                  <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                    <CEOBox image={CEO2} name={`Harshad Kakdiya`} position={`CEO`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CEO


export const CEOBox = ({ image, name, position }) => {
  return (
    <div className="ceoBox">
      <div className="ceoImage bg-gray rounded-4 overflow-hidden height-xl-325 height-md-230 height-sm-165 height-smm-265 height-200">
        <img src={image} alt="" className="h-100 w-100" />
      </div>
      <div className="ceoText m15-top text-center">
        <div className="fw-bold fs-lg-18 fs-16">{name}</div>
        <div className="fw-bold fs-lg-18 fs-16">{position}</div>
      </div>
    </div>
  )
}
