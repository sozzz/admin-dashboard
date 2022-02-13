import "./Dashboard.css";
import graph from './graph.svg';

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Overview</h1>
      <div className="Cards">

      <Card name="Unresolved" number="60"/>
      <Card name="Overdue" number="16"/>
      <Card name="Open" number="43"/>
      <Card name="On hold" number="64"/>
          
      </div>
      <div className="TodaysTrends">
        
        <FullGraph name="Today's Trends" date="as of 25 May 2019, 09:41 PM" imgSrc={graph}/>
        
        <div className="AdditionalInfo">
          <Info name="Resolved" number="449"/>
          <Info name="Received" number="426"/>
          <Info name="Average first response time" number="33"/>
          <Info name="Average response time" number="43h 8m"/>
          <Info name="Resolution within SLA" number="94%"/>
        </div>
      </div>

      <div className="TicketsAndTasks">
        <div className="Tickets">
          <div className="TicketsDetails">
            <h2>Unresolved tickets</h2>
            <p>View details</p>
          </div>
          <div className="TicketsLine">
            <p>Group: Support</p>
            </div>
          
            <TicketsLine name="Waiting on Feature Request" number="4238"/><hr/>
            <TicketsLine name="Awaiting Customer Response" number="1005"/><hr/>
            <TicketsLine name="Awaiting Developer Fix" number="914"/><hr/>
            <TicketsLine name="Pending" number="281"/>
          
         
        </div>
         
          <div className="Tasks">
            <div className="TasksDetails">
            <h2>Tasks</h2>
            <p>View all</p>
          </div>
          <div className="TicketsLine">
            <p>Today</p>
            </div>
          <div className="TicketsLine">
            <p>Create new task</p>
            <p className="plus">+</p>
          </div>
          <hr/>
          <form>
          <div className="Form">
            <input type="radio"  value="First"></input>
            <label for="First">Finish ticket update</label>
            <p className="Urgent">URGENT</p>
            <br></br>
          </div>
          <hr/>
          <div className="Form">
          <input type="radio" value="Second"></input>
          <label for="Second">Create new ticket example</label>
          <p className="New">NEW</p><br></br>
          </div><hr/>
          <div className="Form">
          <input type="radio" value="Third"></input>
          <label for="Third">Update ticket report</label>
          <p className="Default">DEFAULT</p>
          </div>
          </form>
      </div>
    </div>
  );
}

function Card ({name, number}) {
  return ( 
      <div className="Card">
        <p>{name}</p>
        <h2>{number}</h2>
      </div>
    
  );
}

function Info ({name, number}) {
  return ( 
      <div className="Info">
        <p>{name}</p>
        <h2>{number}</h2>
      </div>
    
  );
}

function FullGraph ({name, date, imgSrc}) {
  return ( 
      <div className="FullGraph">
        <h4>{name}</h4>
        <p>{date}</p>
        <img src={imgSrc} alt="FullGraph" />
        
      </div>
    
  );
}

function TicketsLine ({name, number}) {
  return ( 
      <div className="TicketsLine">
        <h4>{name}</h4>
        <p>{number}</p>
      </div>
    
  );
}



export default Dashboard;
