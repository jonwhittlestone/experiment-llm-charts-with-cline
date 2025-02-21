document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("rangeChart").getContext("2d");

  const data = {
    labels: ["100%", "90%", "80%", "60%", "40%", "20%", "10%"],
    datasets: [
      {
        label: "Range (miles)",
        data: [260, 234, 218, 180, 130, 60, 20],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Audi Q4 ETron 45 Range vs Battery Capacity (February 2025)",
          font: {
            size: 16,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Range (miles)",
          },
        },
        x: {
          title: {
            display: true,
            text: "Battery Capacity",
          },
        },
      },
    },
  };

  new Chart(ctx, config);
});
