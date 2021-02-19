import React,{useState} from 'react'

export default function AccDet(prop){

  const [info,updInfo] = useState({
    name:prop.info.fname +" "+ prop.info.lname,
    address:prop.info.add,
    num:prop.info.num,
    pass:prop.info.pass,
    uname:prop.info.uname
  });

  const [btn,updBtn] = useState(true);

  function change(event){
    updInfo({
      ...info,
      [event.target.name]:event.target.value});
  }

  const tests = (event) => {
    event.preventDefault();
    let inputs = document.getElementsByClassName("get");
    updBtn(false);

    for(let x of inputs){
      x.removeAttribute("disabled");
    }
    };

    const handleSubmit= (event)=>{
      event.preventDefault();
      let inputs = document.getElementsByClassName("get");
      let [fn,ln] = info.name.split(" ");
      console.log(info.address);
      updBtn(true);
          for(let x of inputs){
            x.setAttribute("disabled","true");
          }
      prop.func({
        uname:info.uname,
        add:info.address,
        pass:info.pass,
        num:info.num,
        fname:fn,
        lname:ln
      });
    };

  return(
    <div className="accDet">

    <section>
      <p>Welcome to your account page, displayed here are your information. To update your account, make changes then click the update button</p>
      <img src="../images/updates.svg" alt="updateImg"/>
    </section>

      <form onSubmit={btn?tests:handleSubmit}>
        <div className="userInput" >
          <label for="name"><i class="fa fa-user"/>Full name</label>
          <input type="text" className="get" name="name" id="name" value={info.name} onChange={change} disabled/>
        </div>

        <div className="userInput">
          <label for="number"><i class="fa fa-address-book-o"/>Phone Number</label>
          <input type="text" className="get" name="num" id="number" value={info.num} onChange={change} disabled/>
        </div>

        <div className="userInput">
          <label for="address"><i class="fa fa-address-card-o"/>Full Address</label>
          <input type="text" className="get" name="address" id="address" value={info.address} onChange={change} disabled/>
        </div>

        <div className="userInput">
          <label for="uname"><i class="fa fa-user-circle-o"/>Username</label>
          <input type="text" className="get" name="uname" id="uname" value={info.uname} onChange={change} disabled/>
        </div>

        <div className="userInput">
          <label for="pass"><i class="fa fa-key"/>Password</label>
          <input type="text" className="get" name="pass" id="pass" value={info.pass} onChange={change} disabled/>
        </div>

        <button className="dark" type="submit">{btn?"Change":"Update"}</button>

      </form>


    </div>
  );
}
