const chartEl = document.getElementById("chart");

const formatNumberToUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const isCurrentDay = (dayName = "mon") => {
  const today = new Date().getDay();
  const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  return daysOfWeek[today] === dayName;
};

function generateChartItem(item) {
  const data = {
    currentDay: isCurrentDay(item.day),
  };
  return `
  <div class="relative flex flex-1">
            <button class="peer flex-1" aria-label="${
              item.day
            } spending was ${formatNumberToUSD.format(item.amount)}">
              <div class="hover:opacity-50 ${
                data.currentDay ? "bg-cyan" : "bg-softRed"
              }
              }  h-0  rounded-sm peer-hover:opacity-50" style="height: ${
                item.amount * 2
              }px;"></div>
              <p class=" mt-1 text-[0.45rem] text-mediumBrown">${item.day}</p>
            </button>
            <p
              class="bg-darkBrown text-white text-[0.60rem] p-[0.20rem] rounded-sm absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 peer-hover:opacity-100
              peer-focus:opacity-100
              transition-opacity duration-300"
              aria-hidden="true"
            >
              ${formatNumberToUSD.format(item.amount)}
            </p>
          </div>`;
}

async function fetchData() {
  const chartFetch = await fetch("./data.json");
  const chartData = await chartFetch.json();
  console.log(chartData);
  chartEl.innerHTML = chartData.map((i) => generateChartItem(i)).join("");
}

fetchData();
