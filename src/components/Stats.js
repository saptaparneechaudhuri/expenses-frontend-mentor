import React from "react";
import data from "../data.json";

const Stats = () => {
  const displayData = (day, id) => {
    const res = data.find((item) => item.day === day);
    // console.log(res.amount);
    let el = document.querySelector(`#${id}`);

    el.classList.remove("active");
    el.innerHTML = "$" + res.amount;
    // var h = document.createElement("H1");
    // var t = document.createTextNode(res.amount);
    // h.appendChild(t);
    // foo.appendChild(h);
  };

  const removeData = (id) => {
    let el = document.querySelector(`#${id}`);
    el.classList.add("active");
  };
  return (
    <section className="stats">
      <h1 className="stats-heading">Spending - Last 7 days</h1>
      <div className="bars">
        <div className="display-amount active" id="bar1"></div>
        <div
          className="bar-1 bar-props"
          onMouseLeave={() => removeData("bar1")}
          onMouseEnter={() => displayData("mon", "bar1")}
        ></div>
        <div className="display-amount active" id="bar2"></div>

        <div
          className="bar-2 bar-props"
          onMouseLeave={() => removeData("bar2")}
          onMouseEnter={() => displayData("tue", "bar2")}
        ></div>
        <div className="display-amount active" id="bar3"></div>

        <div
          className="bar-3"
          onMouseLeave={() => removeData("bar3")}
          onMouseEnter={() => displayData("wed", "bar3")}
        ></div>

        <div className="display-amount active" id="bar4"></div>

        <div
          className="bar-4 bar-props"
          onMouseLeave={() => removeData("bar4")}
          onMouseEnter={() => displayData("thu", "bar4")}
        ></div>
        <div className="display-amount active" id="bar5"></div>

        <div
          className="bar-5 bar-props"
          onMouseLeave={() => removeData("bar5")}
          onMouseEnter={() => displayData("fri", "bar5")}
        ></div>
        <div className="display-amount active" id="bar6"></div>

        <div
          className="bar-6 bar-props"
          onMouseLeave={() => removeData("bar6")}
          onMouseEnter={() => displayData("sat", "bar6")}
        ></div>
        <div className="display-amount active" id="bar7"></div>

        <div
          className="bar-7 bar-props"
          onMouseLeave={() => removeData("bar7")}
          onMouseEnter={() => displayData("sat", "bar7")}
        ></div>
        {/* <div className="bar-8 bar-props"></div> */}

        <span className="mon days-prop">mon</span>
        <span className="tue days-prop">tue</span>
        <span className="wed days-prop">wed</span>
        <span className="thu days-prop">thu</span>
        <span className="fri days-prop">fri</span>
        <span className="sat days-prop">sat</span>
        <span className="sun days-prop">sun</span>
        <div className="underline"></div>
      </div>

      <div className="amount">
        <div className="amount-heading">
          <p>Total this month</p>
          <h1> $478.33</h1>
        </div>
        <div className="amount-summary">
          <h2 className="percentage">+2.4% </h2>
          <p>from last month</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
