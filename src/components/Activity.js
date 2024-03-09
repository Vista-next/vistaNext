
const Activity = () =>{
    return (
    <section className="" id="activity">
          <div className="container flex flex-col items-center">
            <div className="sm-intro">
              <h2 className="text-2xl text-">Development Activity</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh dolor, efficitur eget pharetra ac, cursus sed sapien. Cras posuere ligula ut blandit varius. </p>
            </div>
            <ul className="row margin-top-50 margin-bottom-50">
              <li className="col"> <i className="flaticon-rotate"></i> <span><span className="counter">4</span> hrs Ago</span>
                <p>Last Update</p>
              </li>
              <li className="col"><i className="flaticon-building"></i> <span><span className="counter">10</span> Days Ago</span>
                <p>Last Block Found</p>
              </li>
              <li className="col"><i className="flaticon-money-1"></i> <span><span className="counter">45057</span>+</span>
                <p>Contributions</p>
              </li>
              <li className="col"><i className="flaticon-team"></i> <span className="counter">80</span>
                <p>Team Members</p>
              </li>
            </ul>
            <a href="#." className="btn">Start on GitHub</a> <a href="#." className="btn btn-inverse">White Paper</a> </div>
        </section>)
      
}


export default Activity;