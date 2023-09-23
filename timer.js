const interval = 1000;

function initiateTimer(futureDate = new Date.now(), callback = () => {}) {
  // TILL WHEN OFFER IS AVAILABLE
  const futureTime = new Date(futureDate).getTime();
  const Ticker = setInterval(() => {
    const currentTime = new Date().getTime();
    // CALCULATE THE DIFFERENCE IN TIME EVERY SECOND
    const diffrence = futureTime - currentTime;
    let isExpired = false;
    if (diffrence > 0) {
      const days = Math.round(diffrence / (1000 * 60 * 60 * 24));

      // HOURS
      const hours = Math.round(
        (diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      // MINUTES
      const minutes = Math.round((diffrence % (1000 * 60 * 60)) / (1000 * 60));

      // SECONDS
      const seconds = Math.round((diffrence % (1000 * 60)) / 1000);

      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        isExpired = true;
      }

      if (callback) {
        callback(days, hours, minutes, seconds, isExpired);
      }
    } else {
      clearInterval(Ticker);
      return;
    }
  }, interval);
}

function updateDhoolTimer(days = 0, hrs = 0, min = 0, secs = 0) {
  const dhoolDealContainer = document.getElementById(
    "dhool-deals-timer-container"
  );
  const daysNode = dhoolDealContainer.querySelector("#days > h4");
  const hrsNode = dhoolDealContainer.querySelector("#hrs > h4");
  const minsNode = dhoolDealContainer.querySelector("#mins > h4");
  const secNode = dhoolDealContainer.querySelector("#secs > h4");
  if (days < 1 && hrs < 1 && min < 1 && secs < 1) {
    try {
      localStorage.setItem("dhool-deals-timer-container", true);
    } catch (error) {
      console.log(error);
    }
  }

  daysNode.innerText = days;
  hrsNode.innerText = hrs;
  minsNode.innerText = min;
  secNode.innerText = secs;
}

function updateEOYSTimer(days = 0, hrs = 0, min = 0, secs = 0) {
  const dhoolDealContainer = document.getElementById(
    "eoys-deals-timer-container"
  );
  const daysNode = dhoolDealContainer.querySelector("#days > h4");
  const hrsNode = dhoolDealContainer.querySelector("#hrs > h4");
  const minsNode = dhoolDealContainer.querySelector("#mins > h4");
  const secNode = dhoolDealContainer.querySelector("#secs > h4");

  daysNode.innerText = days;
  hrsNode.innerText = hrs;
  minsNode.innerText = min;
  secNode.innerText = secs;
}

initiateTimer("Sun Sep 23 2023 12:48:50", updateDhoolTimer);
initiateTimer("Sun Sep 24 2023 18:00:00", updateEOYSTimer);
