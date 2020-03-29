import Layout from '../components/layout/Layout';

const SingUp = () => (
  <div>

    <Layout>

      <div className="container">
        
        <div className="col-row jc-center pt-6">
          <div className="col-7">
            <div className="card br-lg">
              <div className="card-head txt-a-c">
                <h2>Create account</h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-item">
                    <label htmlFor="name">Name:</label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Write your name"
                      className="input-100 br-m"
                    />
                    <div className="icon-input">
                      <i className="a-plaz-astronaut"></i>
                    </div>
                  </div>
                  <div className="form-item">
                    <label htmlFor="email">E-mail:</label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Write your E-mail"
                      className="input-100 br-m"
                    />
                    <div className="icon-input">
                      <i className="a-emoji_food_beverage"></i>
                    </div>
                  </div>
                  <div className="form-item">
                    <label htmlFor="pass">Password:</label>
                    <input 
                      type="password"
                      id="pass"
                      name="pass"
                      placeholder="Write your password"
                      className="input-100 br-m"
                    />
                    <div className="icon-input">
                      <i className="a-vpn_key"></i>
                    </div>
                  </div>
                  <hr/>
                  <div className="jc-end">
                    <button type="submit" className="btn btn-acept br-m">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

    </Layout>

  </div>
)

export default SingUp