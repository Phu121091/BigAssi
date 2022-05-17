import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { ImHome } from "react-icons/im";
import Item from "./components/Item";


const NewValue = {
  name: "",
  amount: "",
  date: "",
};

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState(NewValue);
  const { name, amount, date } = newItem;
  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(0);
  const [sum3, setSum3] = useState(0);
  const [sum4, setSum4] = useState(0);
  const [sum5, setSum5] = useState(0);
  const [sum6, setSum6] = useState(0);
  const [sum7, setSum7] = useState(0);
  const [sum8, setSum8] = useState(0);
  const [sum9, setSum9] = useState(0);
  const [sum10, setSum10] = useState(0);
  const [sum11, setSum11] = useState(0);
  const [sum12, setSum12] = useState(0);
  
  



  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount || !date) {
      alert("Please full fill !!");
      return;
    }

    setData([...data, { ...newItem, id: new Date() }]);

    setNewItem(NewValue);
    setShowForm(false);
   
   
    const S1=data.filter(d=>d.date.slice(5,7)=="01").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    const S2=data.filter(d=>d.date.slice(5,7)=="02").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    const S3=data.filter(d=>d.date.slice(5,7)=="03").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    const S4=data.filter(d=>d.date.slice(5,7)=="04").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    const S5=data.filter(d=>d.date.slice(5,7)=="05").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    const S6=data.filter(d=>d.date.slice(5,7)=="06").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    const S7=data.filter(d=>d.date.slice(5,7)=="07").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    const S8=data.filter(d=>d.date.slice(5,7)=="08").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    const S9=data.filter(d=>d.date.slice(5,7)=="09").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    const S10=data.filter(d=>d.date.slice(5,7)=="10").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    const S11=data.filter(d=>d.date.slice(5,7)=="11").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    const S12=data.filter(d=>d.date.slice(5,7)=="12").reduce((total,item)=>{
      return total + Number(item.amount);
    },0);
    switch(date.slice(5,7)){
      case "01":setSum1(S1+Number(amount));break;
      case "02":setSum2(S2+Number(amount));break;
      case "03":setSum3(S3+Number(amount));break;
      case "04":setSum4(S4+Number(amount));break;
      case "05":setSum5(S5+Number(amount));break;
      case "06":setSum6(S6+Number(amount));break;
      case "07":setSum7(S7+Number(amount));break;
      case "08":setSum8(S8+Number(amount));break;
      case "09":setSum9(S9+Number(amount));break;
      case "10":setSum10(S10+Number(amount));break;
      case "11":setSum11(S11+Number(amount));break;
      case "12":setSum12(S12+Number(amount));break;
    }
   }
  
  

  const handleDelete = (id) => {
    setData(data.filter((d) => d.id !== id));
    // console.log(id);
  };


  
  // console.log(data);

  return (
    <>
      <span className="icon">
        <ImHome fontSize="40px" color="white" />
      </span>
      <main id="section">
        <div className="add-form">
          {showForm ? (
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <Input
                  placeholder="Enter name here"
                  label="Name"
                  valueInput={name}
                  onChangeInput={(e) =>
                    setNewItem({ ...newItem, name: e.target.value })
                  }
                />
                <Input
                  placeholder="Enter amount here"
                  label="Amount"
                  typeInput="number"
                  valueInput={amount}
                  onChangeInput={(e) =>
                    setNewItem({ ...newItem, amount: e.target.value })
                  }
                />
                <Input
                  placeholder="Date"
                  typeInput="date"
                  label="Date"
                  valueInput={date}
                  onChangeInput={(e) =>
                    setNewItem({ ...newItem, date: e.target.value })
                  }
                />
              </div>

              <div className="button-group">
                <Button colorButton="violet" text="ADD" />
                <Button
                  colorButton="gray"
                  text="CANCEL"
                  onClickButton={() => setShowForm(false)}
                />
              </div>
            </form>
          ) : (
            <Button
              onClickButton={() => setShowForm(true)}
              colorButton={"violet"}
              text="ADD NEW EXPENSE"
            />
          )}
        </div>
        {data.length === 0 ?null:<div className="Filter">
          <h1>Total:</h1>
          <div className="totallist">
          <p className="tt">01: {sum1}</p>
          <p className="tt">02: {sum2}</p>
          <p className="tt">03: {sum3}</p>
          <p className="tt">04: {sum4}</p>
          <p className="tt">05: {sum5}</p>
          <p className="tt">06: {sum6}</p>
          <p className="tt">07: {sum7}</p>
          <p className="tt">08: {sum8}</p>
          <p className="tt">09: {sum9}</p>
          <p className="tt">10: {sum10}</p>
          <p className="tt">11: {sum11}</p>
          <p className="tt">12: {sum12}</p>
          </div>
        </div>}
        {data.length === 0 ? (
          <h1 style={{ color: "white" }}>0 Item</h1>
        ) : (
          <div className="list-expense">
            <div className="filter"></div>
            <div className="list-group">
              {data.map((d, index) => (
                <Item
                  name={d.name}
                  date={d.date}
                  amount={d.amount}
                  key={index}
                  handleDelete={handleDelete}
                  id={d.id}
                />
              ))}
          
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default App;